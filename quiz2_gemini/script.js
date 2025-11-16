document.addEventListener('DOMContentLoaded', () => {
    
    // --- Global Variables & DOM Elements ---
    const languageSelect = document.getElementById('language-select');
    const roleSelect = document.getElementById('role-select');
    const genderSelect = document.getElementById('gender-select');
    const levelSelect = document.getElementById('level-select');
    const challengeBtn = document.getElementById('challenge-btn');
    const challengeDisplay = document.getElementById('challenge-display');

    let challenges = [];
    let translations = {};

    // --- Functions ---

    /**
     * Fetches and parses the challenge and translation data.
     */
    async function loadData() {
        try {
            // Fetch translations
            const transResponse = await fetch('translations.json');
            translations = await transResponse.json();

            // Fetch and parse CSV data
            const csvResponse = await fetch('challenges.csv');
            const csvText = await csvResponse.text();
            challenges = parseCSV(csvText);

            // Initial setup after data is loaded
            updateLanguage(languageSelect.value);

        } catch (error) {
            console.error("Error loading initial data:", error);
            challengeDisplay.textContent = "Error loading application data. Please try again later.";
        }
    }
    
    /**
     * Parses CSV data into an array of objects.
     * @param {string} csv - The CSV data as a string.
     * @returns {Array<Object>}
     */
    const parseCSV = (csv) => {
        // This regex handles quotes and commas inside quoted fields
        const lines = csv.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        
        return lines.slice(1).map(line => {
            const values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            return headers.reduce((obj, header, index) => {
                const value = values[index] ? values[index].trim().replace(/"/g, '') : '';
                obj[header] = value;
                return obj;
            }, {});
        });
    };

    /**
     * Updates all UI text based on the selected language.
     * @param {string} lang - The selected language code ('en' or 'da').
     */
    const updateLanguage = (lang) => {
        if (!translations[lang]) return; // Guard against missing translation data

        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        // Update roles dropdown after language change
        populateRoles(lang);
    };
    
    /**
     * Populates the role dropdown based on the available roles for the current language.
     * @param {string} lang - The selected language code ('en' or 'da').
     */
    const populateRoles = (lang) => {
        if (!translations[lang]) return;
        const currentRoleValue = roleSelect.value;
        roleSelect.innerHTML = ''; // Clear existing options

        // Add "All Roles" option
        const allRolesOption = document.createElement('option');
        allRolesOption.value = 'all';
        allRolesOption.textContent = translations[lang].role_all;
        roleSelect.appendChild(allRolesOption);

        // Get unique roles for the selected language
        const rolesForLang = [...new Set(challenges
            .filter(c => c.language === lang)
            .map(c => c.role))];
        
        rolesForLang.forEach(role => {
            const option = document.createElement('option');
            option.value = role;
            option.textContent = role;
            roleSelect.appendChild(option);
        });
        
        // Try to preserve the selected role if it exists in the new language
        const roleExistsInNewLang = rolesForLang.some(role => role === currentRoleValue);
        if (roleExistsInNewLang) {
            roleSelect.value = currentRoleValue;
        } else {
            roleSelect.value = 'all'; // Default to 'all' if previous role doesn't exist
        }
    };
    
    /**
     * Fetches and displays a challenge based on user selections.
     */
    const getChallenge = () => {
        const selectedLang = languageSelect.value;
        const selectedRole = roleSelect.value;
        const selectedGender = genderSelect.value;
        const selectedLevel = levelSelect.value;

        // Define gender filter logic
        let genderFilter = ['m', 'f', 'mf']; // Default for 'MF'
        if (selectedGender === 'M') {
            genderFilter = ['m', 'mf'];
        } else if (selectedGender === 'F') {
            genderFilter = ['f', 'mf'];
        }

        // Filter challenges based on criteria
        let filteredChallenges = challenges.filter(c => {
            const langMatch = c.language === selectedLang;
            const roleMatch = selectedRole === 'all' || c.role === selectedRole;
            const genderMatch = genderFilter.includes(c.gender);
            return langMatch && roleMatch && genderMatch;
        });

        if (filteredChallenges.length === 0) {
            challengeDisplay.textContent = translations[selectedLang].no_challenge_found;
            return;
        }

        // Get all possible challenges from the filtered set
        let possibleChallenges = [];
        if (selectedLevel === 'all') {
            // If 'all levels', gather challenges from all level columns
            filteredChallenges.forEach(c => {
                if (c.level1) possibleChallenges.push(c.level1);
                if (c.level2) possibleChallenges.push(c.level2);
                if (c.level3) possibleChallenges.push(c.level3);
            });
        } else {
            // Otherwise, get challenges from the specific level column
            filteredChallenges.forEach(c => {
                if (c[selectedLevel]) {
                    possibleChallenges.push(c[selectedLevel]);
                }
            });
        }
        
        // Remove empty entries and select a random one
        possibleChallenges = possibleChallenges.filter(c => c && c.trim() !== '');

        if (possibleChallenges.length > 0) {
            const randomIndex = Math.floor(Math.random() * possibleChallenges.length);
            challengeDisplay.textContent = possibleChallenges[randomIndex];
        } else {
            challengeDisplay.textContent = translations[selectedLang].no_challenge_found;
        }
    };

    // --- Initialization & Event Listeners ---

    // 1. Load all data and initialize the app
    loadData();
    
    // 2. Add event listeners
    languageSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });

    challengeBtn.addEventListener('click', getChallenge);
});
