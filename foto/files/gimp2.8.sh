## Gendan GIMP 2.8
sudo apt purge gimp gimp-lensfun gimp-plugin-registry gimp-texturize -y
sudo apt purge libgimp2.0 -y
sudo apt autoremove -y
sudo rm /etc/apt/sources.list.d/otto-kesselgulasch*
sudo add-apt-repository ppa:otto-kesselgulasch/gimp -y
sudo apt update
sudo apt install -y gimp gimp-lensfun gimp-plugin-registry gimp-texturize
