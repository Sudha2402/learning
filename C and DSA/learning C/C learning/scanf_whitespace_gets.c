#include <stdio.h>
// #include &lt;stdio.h&gt;//here this type &lt shows that this is used to print < special character in website or .html page

int main() {
  
    char str[100];
   
    printf("Using gets:\n");
    printf("Enter a line of text: ");
    gets(str); // Reads a line of text, including white-space
    printf("You entered (gets): %s\n\n", str);


    // Example of %[^\n] to get whitespace data
    printf("Using gets with [^\\n]:\n");
    printf("Enter a line of text: ");
     scanf("%99[^\n]", str); // Reads a line of text, excluding white-space
      // %99 will stop buffer overflow
    printf("You entered (scanf): %s\n", str);


      return 0;

/*
Using gets:
Enter a line of text: hey, Sudha here
You entered (gets): hey, Sudha here

Using gets with [^\n]:
Enter a line of text: I am very good human being
You entered (scanf): I am very good human being
PS C:\Sudhadocuments\C files\C learning> 
*/



  }


/*
gets()

gets is a more convenient method of reading a string of text containing whitespaces.
Unlike scanf(), it does not skip whitespaces.
It is used to read the input until it encounters a new line.
when it reads a newline character then the gets() function will be terminated


%[^\n]

It is an edit conversion code.
The edit conversion code %[^\n] can be used as an alternative to gets.
C supports this format specification with scanf() function.
This edit conversion code can be used to read a line containing characters like variables and even whitespaces.
In general scanf() function with format specification like %s and specification with the field width in the form of %ws can read-only strings till the non-whitespace part.When it encounters whitespace then it terminates as \n enter
It means they cannot be used for reading a text containing more than one word, especially with Whitespaces.

%[^\n] also terminates with a newline character


Safety Note: Both gets() and scanf() do not check array bounds, making them unsafe to use as they can lead to buffer overflow.




*/