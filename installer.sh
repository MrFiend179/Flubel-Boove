#!bin/bash
64bit(){
    wget https://github.com/MrFiend179/Flubel-MinecraftBot/releases/download/v1.0/Flubel.MinecraftBot.1.0.0.x64.exe
}
32bit(){
    wget https://github.com/MrFiend179/Flubel-MinecraftBot/releases/download/v1.0/Flubel.MinecraftBot.1.0.0.x32.exe
}
srccd(){
    wget https://github.com/MrFiend179/Flubel-MinecraftBot/archive/refs/tags/v1.0.tar.gz
}
echo "Starting to download MinecraftBot app :D"
read   -n 1 -p $'Press any key to Continue\n'
echo " Starting....."
echo 'Select The System Version/Type'
echo '[1] 64-bit'
echo '[2] 32-bit'
echo '[3] Source Code'
read pass
if [ $pass = '1' ]
then
    echo "################################################"
    echo "# Downloading Flubel MinecraftBot 1.1.0.x64.exe#"
    echo "#                                              #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    64bit
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fi
if [ $pass = '2' ]
then
    echo "################################################"
    echo "# Downloading Flubel MinecraftBot 1.1.0.x32.exe#"
    echo "#                                              #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    32bit
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fi
if [ $pass = '3' ]
then
    echo "################################################"
    echo "# Downloading Source CodeFlubel MinecraftBot   #"
    echo "#                                              #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    srccd
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fi