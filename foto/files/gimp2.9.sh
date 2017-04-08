#Afinstaller GIMP 2.8 og installer 2.9
sudo apt purge gimp gimp-lensfun gimp-plugin-registry gimp-texturize -y
sudo apt autoremove -y
sudo rm /etc/apt/sources.list.d/otto-kesselgulasch*
sudo add-apt-repository ppa:otto-kesselgulasch/gimp-edge -y
sudo apt update
sudo apt install -y gimp gimp-lensfun gimp-plugin-registry gimp-texturize
