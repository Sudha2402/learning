// C program to write to a binary file
#include <stdio.h>
#include <stdlib.h>

// Struct declared
struct Num {
    int n1, n2;
};

// Driver code
int main()
{
      // variables declared
    int n;
    struct Num obj;
  
      // File Pointers declared
    FILE* fptr;
  
      // Failure Condition
    if ((fptr = fopen("tempT.bin", "wb")) == NULL) { //this binary will not be understandable by you as it is stored in binary form but if you type something directly in binary then it is understandable
        printf("Error! opening file");

        // if file pointer returns NULL program
        // will exit
        exit(1);
    }

      
    for (n = 1; n < 10; n++) {
        obj.n1 = n;
        obj.n2 = 12 + n;
      
      // Data written 
        fwrite(&obj, sizeof(struct Num), 1, fptr);
    }

      // File closed
    fclose(fptr);

    printf("Data in written in Binary File\n\n");



// C Program to Read from a binary file using fread()
#include <stdio.h>
#include <stdlib.h>
struct Num 
{
    int n1, n2;
};



  if ((fptr = fopen("temp.bin", "rb")) == NULL) 
  {
    printf("Error! opening file");
        
    // If file pointer will return NULL
    // Program will exit.
    exit(1);
  }
    
  // else it will return a pointer 
  // to the file.
  for (int n = 1; n < 10; ++n) 
  {
    fread(&obj, sizeof(struct Num), 1, fptr);
    printf("n1: %d\tn2: %d\n", obj.n1, obj.n2);

    /*
    Data in written in Binary File

n1: 1   n2: 13
n1: 2   n2: 14
n1: 3   n2: 15
n1: 4   n2: 16
n1: 5   n2: 17
n1: 6   n2: 18
n1: 7   n2: 19
n1: 8   n2: 20
n1: 9   n2: 21


but if you have saved the bin file by typing youself then this will not give the required result as it think whatever written in it is in binary and it will try to convert it into normal text that is already written normal , hence it halts
    */
  }
  
  fclose(fptr);





    return 0;
}
