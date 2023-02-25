#!bin/bash
64bit(){
    wget https://github.com/MrFiend179/Flubel-MinecraftBot/releases/download/v1.0/Flubel.MinecraftBot.1.0.0.x64.exe
}
32bit(){
    wget https://github.com/MrFiend179/Flubel-MinecraftBot/releases/download/v1.0/Flubel.MinecraftBot.1.0.1.x32.exe
}
srccd(){
    wget https://github.com/MrFiend179/Flubel-MinecraftBot/archive/refs/tags/v1.0.tar.gz
}
64bit1(){
    wget https://github.com/MrFiend179/Flubel-MinecraftBot/releases/download/v1.0.1/Flubel.MinecraftBot.1.0.1.x64.exe
}
32bit1(){
    wget https://github.com/MrFiend179/Flubel-MinecraftBot/releases/download/v1.0.1/Flubel.MinecraftBot.1.0.1.x32.exe
}
srccd1(){
    wget https://github.com/MrFiend179/Flubel-MinecraftBot/archive/refs/tags/v1.0.1.tar.gz
}
linux(){
    wget https://github.com/MrFiend179/Flubel-MinecraftBot/releases/download/v1.0.1/Flubel.MinecraftBot-1.0.1.AppImage
}
64bit2(){
    wget https://github.com/MrFiend179/Flubel-Boove/releases/download/v1.1.0/Boove.1.1.0.x64.exe
}
32bit2(){
    wget https://github.com/MrFiend179/Flubel-Boove/releases/download/v1.1.0/Boove.1.1.0.x32.exe
}
src3(){
    wget https://github.com/MrFiend179/Flubel-Boove/archive/refs/tags/v1.2.0.zip
}
32bit364(){
    wget https://github.com/MrFiend179/Flubel-Boove/releases/download/v1.2.0/Boove-Setup-1.2.0-x64.exe
}
32bit3(){
    wget https://github.com/MrFiend179/Flubel-Boove/releases/download/v1.2.0/Boove-Setup-1.2.0-x32.exe
}
echo "Starting to download Flubel MinecraftBot app :D"
read   -n 1 -p $'Press any key to Continue\n'
echo " Starting....."
echo 'Select The System Version/Type'
echo '[1] 64-bit v1.0.0'
echo '[2] 32-bit v1.0.0'
echo '[3] Source Code v1.0.0'
echo '[4] 64-bit v1.0.1'
echo '[5] 64-bit v1.0.1 [Linux]'
echo '[6] 32-bit v1.0.1'
echo '[7] Source Code v1.0.1'
echo '[8] Flubel-Boove v1.1.0 x64'
echo '[9] Flubel-Boove v1.1.0 x32'
echo '[10] Source Code v1.2.0'
echo '[11] Flubel-Boove v1.2.0 x64'
echo '[12] Flubel-Boove v1.2.0 x32'
read pass
if [ $pass = '1' ]
then
    echo "################################################"
    echo "# Downloading Flubel MinecraftBot 1.0.0.x64.exe#"
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
    echo "# Downloading Flubel MinecraftBot 1.0.0.x32.exe#"
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
if [ $pass = '4' ]
then
    echo "################################################"
    echo "# Downloading Flubel MinecraftBot 1.0.1.x64.exe#"
    echo "#                                              #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    64bit1
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fi
if [ $pass = '5' ]
then
    echo "################################################"
    echo "# Downloading Flubel MinecraftBot 1.0.1.x64.exe#"
    echo "# For Linux                                    #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    linux
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fi
if [ $pass = '6' ]
then
    echo "################################################"
    echo "# Downloading Flubel MinecraftBot 1.0.1.x32.exe#"
    echo "#                                              #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    32bit1
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fi
if [ $pass = '7' ]
then
    echo "################################################"
    echo "# Downloading Source CodeFlubel MinecraftBot   #"
    echo "#                                              #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    srccd1
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fi
if [ $pass = '8' ]
then
    echo "################################################"
    echo "# Downloading Flubel Boove 1.1.0.x64.exe       #"
    echo "#                                              #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    64bit2
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fi
if [ $pass = '9' ]
then
    echo "################################################"
    echo "# Downloading Flubel Boove 1.1.0.x32.exe       #"
    echo "#                                              #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    32bit2
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fi
if [ $pass = '10' ]
then
    echo "################################################"
    echo "# Downloading Flubel Boove 1.2.0 Source code   #"
    echo "#                                              #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    src3
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fi
if [ $pass = '11' ]
then
    echo "################################################"
    echo "# Downloading Flubel Boove 1.2.0.x64.exe       #"
    echo "#                                              #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    32bit364
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fiif [ $pass = '12' ]
then
    echo "################################################"
    echo "# Downloading Flubel Boove 1.2.0.x32.exe       #"
    echo "#                                              #"
    echo "#          Made by Fiend. (Flubel)             #"
    echo "################################################"
    32bit3
    echo "################################################"
    echo '#          Download was Succesful :D           #'
    echo "################################################"
fi