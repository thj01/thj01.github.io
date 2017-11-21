mail = input("Indtast mail der skal tjekkes brugernavn: ")

mail_a = mail.find("@")

username = mail[:mail_a]

print("\n\tBrugernavnet er: {0}".format(username))

