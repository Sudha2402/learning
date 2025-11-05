/*
getch() is a nonstandard function and is present in conio.h header file which is mostly used by MS-DOS compilers like Turbo C. It is not part of the C standard library or ISO C, nor is it defined by POSIX.
Like these functions, getch() also reads a single character from the keyboard. But it does not use any buffer, so the entered character is immediately returned without waiting for the enter key.

int getch(void);

Parameters: This method does not accept any parameters.
Return value: This method returns the ASCII value of the key pressed.

getch() method pauses the Output Console until a key is pressed.
It does not use any buffer to store the input character.
The entered character is immediately returned without waiting for the enter key.
The entered character does not show up on the console.
The getch() method can be used to accept hidden inputs like password, ATM pin numbers, etc.

*/

// Example: To accept hidden passwords using getch()
// Note: Below code won’t run on Online compilers, but on MS-DOS compilers like Turbo IDE.
// C code to illustrate working of
// getch() to accept hidden inputs

#include <conio.h>
#include <dos.h> // delay()
#include <stdio.h>
#include <string.h>

void main()
{

    // Taking the password of 8 characters
    char pwd[9];
    int i;

    // To clear the screen
    clrscr();

    printf("Enter Password: ");
    for (i = 0; i < 8; i++) {

        // Get the hidden input
        // using getch() method
        pwd[i] = getch();

        // Print * to show that
        // a character is entered
        printf("*");
    }
    pwd[i] = '\0';
    printf("\n");

    // Now the hidden input is stored in pwd[]
    // So any operation can be done on it

    // Here we are just printing
    printf("Entered password: ");
    for (i = 0; pwd[i] != '\0'; i++)
        printf("%c", pwd[i]);

    // Now the console will wait
    // for a key to be pressed
    getch();
}

