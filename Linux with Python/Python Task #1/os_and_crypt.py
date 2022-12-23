
import crypt #importing the crypt and os module for later use
import os

#The format of the function below could be rearranged for better security and password protection.

def createUser(username): #This creates the user along with their encrypted password.
    password = 'password' #Since no password was given, I'm using the password that you gave us in the lab, which was "password". 
    encryptedPassword = crypt.crypt(password, crypt.METHOD_SHA512) #this encrypts the password. Since no method was specified, I used the strongest one to encrypt it (METHOD_SHA512).
    os.system("sudo useradd -p"+encryptedPassword+" -s /bin/bash -d /home/"+username+" -m -c '"+username+"' "+username+"") #user is officially created
    
with open("usernames.txt", "r") as usernameFile: #opening the file in read mode
    for username in usernameFile: #goes through each line in the file which represents a username
        createUser(username) #function is called for actually creating a user using the username created in the username file
        os.system("sudo chown "+username+":"+username+"/home/username") #changing ownership to username:username for each username
        os.system("sudo usermod -a -G programmer "+username) #adding the username to the group "cst8254"