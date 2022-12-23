// Array of JSON objects with titles and texts
const data = [{
    title: 'Directories (& some Files)',
    textList: {
      listedItems: [{
          title: "ls",
          explanation: "Lists the contents of the current directory, such as 'Documents' or 'Downloads'"
        },
        {
          title: "cd",
          explanation: "Changes the current working directory. For example: cd /home/user/documents"
        },
        {
          title: "mkdir",
          explanation: "Creates a new directory. For example: mkdir new_directory"
        },
        {
          title: "rmdir",
          explanation: "Deletes an empty directory. For example: rmdir empty_directory"
        },
        {
          title: "rm",
          explanation: "Deletes a file or directory (use with caution). For example: rm file.txt"
        },
        {
          title: "cp",
          explanation: "Copies a file or directory. For example: cp file.txt /home/user/documents/"
        },
        {
          title: "mv",
          explanation: "Moves or renames a file or directory. For example: mv file.txt new_name.txt"
        },
        {
          title: "pwd",
          explanation: "Prints the current working directory, such as '/home/user/documents'"
        },
        {
          title: "find",
          explanation: "Searches for files or directories matching a specific pattern. For example: find . -name \"*.txt\""
        }
      ]
    }
  },
  {
    title: 'Files',
    textList: {
      listedItems: [{
          title: "cat",
          explanation: "Displays the contents of a file. For example: cat file.txt"
        },
        {
          title: "less",
          explanation: "Displays the contents of a file one screen at a time. For example: less file.txt"
        },
        {
          title: "head",
          explanation: "Displays the first few lines of a file. For example: head -n 10 file.txt (displays the first 10 lines of file.txt)"
        },
        {
          title: "tail",
          explanation: "Displays the last few lines of a file. For example: tail -n 5 file.txt (displays the last 5 lines of file.txt)"
        },
        {
          title: "vi",
          explanation: "Opens and edits a file using the vi text editor. For example: vi file.txt"
        },
        {
          title: "nano",
          explanation: "Opens and edits a file using the nano text editor. For example: nano file.txt"
        },
        {
          title: "touch",
          explanation: "Creates a new empty file. For example: touch new_file.txt"
        }
      ]
    }
  },
  {
    title: 'Compression',
    textList: {
      listedItems: [{
          title: "gzip",
          explanation: "Compresses a file using the gzip algorithm. For example: gzip file.txt (creates a new file called file.txt.gz)"
        },
        {
          title: "gunzip",
          explanation: "Decompresses a file compressed with gzip. For example: gunzip file.txt.gz (creates a new file called file.txt)"
        },
        {
          title: "bzip2",
          explanation: "Compresses a file using the bzip2 algorithm. For example: bzip2 file.txt (creates a new file called file.txt.bz2)"
        },
        {
          title: "bunzip2",
          explanation: "Decompresses a file compressed with bzip2. For example: bunzip2 file.txt.bz2 (creates a new file called file.txt)"
        },
        {
          title: "tar",
          explanation: "Creates an archive of multiple files. For example: tar -cf archive.tar file1.txt file2.txt (creates a new file called archive.tar)"
        },
        {
          title: "untar",
          explanation: "Extracts the files from a tar archive. For example: tar -xf archive.tar (extracts the files from archive.tar)"
        },
        {
          title: "zip",
          explanation: "Compresses and archives multiple files. For example: zip archive.zip file1.txt file2.txt (creates a new file called archive.zip)"
        },
        {
          title: "unzip",
          explanation: "Extracts the files from a zip archive. For example: unzip archive.zip (extracts the files from archive.zip)"
        }
      ]
    }
  },
  {
    title: 'Process Management',
    textList: {
      listedItems: [{
          title: "ps",
          explanation: "Lists the processes currently running on the system. For example: ps aux (lists all processes for all users)"
        },
        {
          title: "top",
          explanation: "Displays real-time information about the processes running on the system, including pid, user, memory etc."
        },
        {
          title: "kill",
          explanation: "Sends a signal to a process to terminate it. For example: kill 12345 (terminates the process with PID 12345)"
        },
        {
          title: "nice",
          explanation: "Changes the priority of a process. For example: nice -n 10 program.sh (starts the script program.sh with a lower priority)"
        },
        {
          title: "renice",
          explanation: "Changes the priority of an already running process. For example: renice -n 10 12345 (changes the priority of the process with PID 12345 to a lower value)"
        },
        {
          title: "time",
          explanation: "Measures the time taken by a command to run. For example: time ls (measures the time taken to run the ls command)"
        },
        {
          title: "cron",
          explanation: "Schedules tasks to be run automatically at a specified time. For example: cron job -t \"0 0 * * *\" -c \"command\" (runs the command every day at midnight)"
        }
      ]
    }
  },
  {
    title: 'Searching',
    textList: {
      listedItems: [{
          title: "grep",
          explanation: "Searches for a pattern in one or more files. For example: grep \"pattern\" file.txt (searches for the string \"pattern\" in file.txt)"
        },
        {
          title: "find",
          explanation: "Searches for files or directories matching a specific pattern. For example: find . -name \"*.txt\" (searches for all files with the .txt extension in the current directory and its subdirectories)"
        },
        {
          title: "locate",
          explanation: "Searches for files or directories using a database of file names. For example: locate file.txt (searches for all files called file.txt in the database)"
        },
        {
          title: "which",
          explanation: "Shows the path of a command. For example: which ls (displays the path of the ls command)"
        },
        {
          title: "whereis",
          explanation: "Shows the location of a command, file, or man/manual page. For example: whereis ls (displays the location of the ls command and its man/manual page)"
        }
      ]
    }
  },
  {
    title: 'Permissions',
    textList: {
      listedItems: [{
          title: "chmod",
          explanation: "Changes the permissions of a file or directory. For example: chmod 755 file.txt (gives read, execute permissions to owner and read, execute permissions to everyone else)"
        },
        {
          title: "chown",
          explanation: "Changes the owner of a file or directory. For example: chown user:group file.txt (changes the owner to user and the group to group)"
        },
        {
          title: "chgrp",
          explanation: "Changes the group of a file or directory. For example: chgrp group file.txt (changes the group to group)"
        },
        {
          title: "umask",
          explanation: "Sets the default permissions for newly created files and directories. For example: umask 022 (sets the default permissions to rw-r--r--)"
        },
        {
          title: "sudo",
          explanation: "Allows a user to execute a command with root privileges. For example: sudo apt-get update (updates the package manager database with root privileges)"
        }
      ]
    }
  },
  {
    title: 'Networking',
    textList: {
      listedItems: [{
          title: "ifconfig",
          explanation: "Displays information about the network interfaces. For example: ifconfig (displays information about all interfaces)"
        },
        {
          title: "ping",
          explanation: "Sends an ICMP echo request to a host to test the connectivity. For example: ping example.com (sends an echo request to example.com)"
        },
        {
          title: "traceroute",
          explanation: "Shows the route taken by packets to a destination host. For example: traceroute example.com (displays the route to example.com)"
        },
        {
          title: "netstat",
          explanation: "Shows the status of the network connections. For example: netstat -an (displays all connections with numeric addresses)"
        },
        {
          title: "route",
          explanation: "Shows the routing table. For example: route -n (displays the routing table with numeric addresses)"
        },
        {
          title: "nslookup",
          explanation: "Queries the DNS to obtain information about a domain. For example: nslookup example.com (displays information about example.com)"
        }
      ]
    }
  },
  {
    title: 'System',
    textList: {
      listedItems: [{
          title: "uname",
          explanation: "Shows the system information. For example: uname -a (displays all information)"
        },
        {
          title: "uptime",
          explanation: "Shows the time the system has been running. For example: uptime"
        },
        {
          title: "df",
          explanation: "Shows the disk usage. For example: df -h (displays the usage in human-readable format)"
        },
        {
          title: "free",
          explanation: "Shows the memory usage. For example: free -m (displays the usage in megabytes)"
        },
        {
          title: "dmesg",
          explanation: "Shows the kernel log. For example: dmesg"
        },
        {
          title: "systemctl",
          explanation: "Controls the system services. For example: systemctl start apache2 (starts the Apache web server service)"
        },
        {
          title: "shutdown",
          explanation: "Shuts down or restarts the system. For example: shutdown -h now (shuts down the system immediately)"
        }
      ]
    }
  },
  /*{
      title: 'Compression',
      textList: {
          listedItems: [
            {
              title: "",
              explanation: ""
            }
          ]
      }
  },*/
];