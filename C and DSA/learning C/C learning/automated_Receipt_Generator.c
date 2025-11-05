#include <stdio.h>
#include <stdlib.h> 
#include <string.h> 
#include <unistd.h> 
#include <fcntl.h> 

int main()
{



    FILE *ptr;
    ptr = fopen("message.txt", "w+");//it overwrites
    if (ptr == NULL)
    {
        printf("Unable to access file");
        return 1;
    }
    else
    {
        printf("File opened successfully\n\n");
       fputs("Thanks {{name}} for purchasing {{item}} from our outlet {{outlet}}. Please visit our outlet {{outlet}} for any kind of problems. We plan to serve you again soon.",ptr);


    }

int str[10];
    fseek(ptr,7,SEEK_SET);
   // fgets(str, 10, ptr);
  //  printf("%s",str);
    printf("\n\n");
    fputs("  Sudha  ", ptr);
        fclose(ptr);

     ptr = fopen("message.txt", "r+");
    if (fgets(str, 180, ptr) != NULL) {
        puts(str);
    }


    fclose(ptr);



// The strchr() function returns a pointer to the first occurrence of c that is converted to a character in string. The function returns NULL if the specified character is not found.

// In C/C++, std::strstr() is a predefined function used for string matching. <string.h> is the header file required for string functions. This function takes two strings s1 and s2 as arguments and finds the first occurrence of the string s2 in the string s1. The process of matching does not include the terminating null-characters(‘\0’), but function stops there. 

// char *strstr (const char *s1, const char *s2);

// Parameters
// s1: This is the main string to be examined.
// s2: This is the sub-string to be searched in string.
// Return Value
// This function returns a pointer point to the first character of the found s2 in s1 otherwise a null pointer if s2 is not present in s1.
// If s2 points to an empty string, s1 is returned.



/*
const char *filename = "message.txt"; // Change to your file name 
    const char *word_to_find = "name";   // Change to the word you want to find 

    #define BUFFER_SIZE 1024

    char buffer[BUFFER_SIZE]; 
    int fd; 
    ssize_t bytes_read; 
     
    // Open the file for reading 
    fd = open(filename, O_RDONLY); 
    if (fd == -1) { 
        perror("Error opening file"); 
        return EXIT_FAILURE; 
    } 
 
    // Read the file in chunks 
    while ((bytes_read = read(fd, buffer, sizeof(buffer) - 1)) > 0) { 
        buffer[bytes_read] = '\0'; // Null-terminate the buffer 
 
        // Search for the word in the buffer 
        if (strstr(buffer, word_to_find) != NULL) { 
            printf("Word '%s' found in the file.\nand buffer is :%d\nBytes read :%d", word_to_find,buffer,bytes_read); 
            break; // Exit the loop if the word is found 

        } 
    } 
 
    if (bytes_read == -1) { 
        perror("Error reading file"); 
    } else if (bytes_read == 0) { 
        printf("Word '%s' not found in the file.\n", word_to_find); 


        /*
        Word 'name' found in the file.
and buffer is :6355728
Bytes read :161
        */
  /*  }  */
/*
    // Close the file 
    close(fd); 
    return EXIT_SUCCESS; 
*/

/*
Explaination:
Include Headers: The necessary headers are included for file handling and string manipulation.
Define Constants: Constants for the buffer size and the filename are defined.
Open the File: The file is opened using open(). Error handling is included to check if the file was opened successfully.
Read the File: A loop reads the file in chunks of BUFFER_SIZE bytes using read(). The buffer is null-terminated after reading to treat it as a string.
Search for the Word: The strstr() function is used to search for the specified word in the buffer. If found, a message is printed, and the loop breaks.
Handle End of File: If the end of the file is reached without finding the word, a message is printed.
Close the File: Finally, the file is closed using close().
*/

    printf("");
    printf("\n");

    return 0;
}