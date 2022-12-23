
Task:

- Open the file`usernames.txt`  in **`read`** mode
- Create a user account for each line of the file by calling the `createUser` function
- Change ownership of the **`/home/username`** folder to **`username:username`**
- Execute the **`chown`** function using the **`os.system`** function
- Execute the **`usermod`** function using the **`os.system`** function to add the username to the group **`programmer`**