// C program to implement
// fseek
#include <stdio.h>
#include <stdlib.h>

// Driver code
int main()
{
      // string declared
    char str[80];
  
      // File Pointer declared
    FILE* ptr;

      // File Opened
    ptr = fopen("Hello.txt", "w+");//write + read
    
      // Puts data in File
      fputs("Welcome to Sudha's place", ptr);

      // fseek function used
    fseek(ptr, 11, SEEK_SET);//it points to seek set thet is 11th position
  
      // puts Shanaya's palce in place of at position defined 
      // After 11 elements
    fputs("Shanaya's palce  ", ptr);
    fclose(ptr);

      // Reading the file
    ptr = fopen("Hello.txt", "r+");
    if (fgets(str, 80, ptr) != NULL) {
        puts(str);
    }



// rewind() in C

//    rewind() function sets the file pointer to the beginning of the file. 
// void rewind(FILE *stream);
 // Rewind function called  Sets ptr to beginning //it is used after fgets which put the pointer at some other position as per thr bytes to be read , like fgets(str, 80, ptr) puts the ptr after 80 th position hence next time when fget is used then it will start for that position  but if we want the fgets from start then we need to use rewind

    rewind(ptr);

    if (fgets(str, 200, ptr) != NULL) {
        puts(str);//Welcome to Shanaya's palce
    }



      // Close the opened file
    fclose(ptr);

    /*
    Welcome to Shanaya's palce 
    */





  
    return 0;
}