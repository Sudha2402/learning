// C program to illustrate situation 
// where flush(stdin) is required only 
// in certain compilers. 
#include <stdio.h> 
#include<stdlib.h> 
int main() 
{ 
	// char str[20]; 
	char str[50]; 
	int i; 
	for (i=0; i<2; i++) 
	{ 
        printf("Enter a string %d:\n",i);
		scanf("%[^\n]s", str); 
		printf("%s\n", str); 
		// fflush(stdin); 
      
	} 


    /*
    The code above takes only single input and gives the same result for the second input. Reason is because as the string is already stored in the buffer i.e. stream is not cleared yet as it was expecting string with spaces or new line. So, to handle this situation fflush(stdin) is used.



    Output :
    Enter a string 0:
Hello I am Sudha //(it let you to write only index 0 part and lower will be taken automatically with the buffer)
Hello I am Sudha //result of printf
Enter a string 1:
Hello I am Sudha(taken automatically from buffer , you have not typed it infect it doesnot let you to type)
PS C:\Sudhadocuments\C files\C learning> 
    */



// C program to illustrate flush(stdin) 
// This program works as expected only 
// in certain compilers like Microsoft 
// visual studio.

for (i = 0; i<2; i++) 
    { 
        printf("Enter a string %d:\n",i);
        scanf("%[^\n]s", str); //this will take from above buffer hence doesnot let you to type in i= 0 here 
        printf("%s\n", str); 
  
        // used to clear the buffer 
        // and accept the next string 
        fflush(stdin); //it let you to type in next i=1
    } 


/*
Enter a string 0:
hey, I am doing great(typed by you)
hey, I am doing great
Enter a string 1:
hey, I am doing great

Enter a string 0:
hey, I am doing great
Enter a string 1:
I am happy to be here
I am happy to be here
PS C:\Sudhadocuments\C files\C learning> 
*/


	return 0; 
} 

/*
fflush() is typically used for output stream only. Its purpose is to clear (or flush) the output buffer and move the buffered data to console (in case of stdout) or disk (in case of file output stream).


Below is its syntax.

fflush(FILE *ostream);

ostream points to an output stream 
or an update stream in which the 
most recent operation was not input, 
the fflush function causes any 
unwritten data for that stream to 
be delivered to the host environment 
to be written to the file; otherwise, 
the behavior is undefined.



// using fflush for input stream like stdin

While taking an input string with spaces, the buffer does not get cleared for the next input and considers the previous input for the same. To solve this problem fflush(stdin) is. used to clear the stream/buffer. 



Although using “fflush(stdin)” after “scanf()” statement also clears the input buffer in certain compilers, it is not recommended to use it as it is undefined behavior by the language standards. In C and C++, we have different methods to clear the buffer


*/