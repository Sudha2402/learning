// Here’s an example of reading data from a file and writing to it:
#include <stdio.h>

// #include <conio.h>

// Driver code
int main()
{

    // C getchar is a standard library function that takes a single input character from standard input. The major difference between getchar and getc is that getc can take input from any no of input streams but getchar can take input from a single standard input stream.

    // It is defined inside the <stdio.h> header file.
    // Just like getchar, there is also a function called putchar that prints only one character to the standard output stream.

    int character;

    printf("Enter data \n");
    character = getchar(); // get only one character at a time and also set the position after 1 character so next time when getchar() is used then it will take the second inut character like in Sudha , S at first character and u in next  getchar()

    // it will just track the console and getchar takes from last getchar position in the console

    printf("The entered character is : %c\n", character);

    // or

    // putchar to print the character entered by the user:
    printf("The entered character is : ");
    putchar(character);
    printf("\n");

    /*
    Enter data
    sadwq
    The entered character is : s
    The entered character is : s
    */

    // C program to read multiple characters using getchar():
    // int s = 13;
    int s = 3; // it let the while loop to run three times hence getchar will take next three input characters from lest time getchar position
    int x;
    while (s--)
    {
        x = getchar(); // it will take the character from the last position of getchar set from the very first inputs irrespective of after in middle statements
        putchar(x);    // udh
    }
    printf("\n\n");

    // C program to read characters using getchar() and do-while loop
    int chI, i = 0;
    char str[150];
    printf("Enter the characters\n"); // as we have already input the character at the top hence this will not let us to type but it will take the input from the last position of getchar

    do
    {
        // takes character, number, etc from the user
        chI = getchar();

        // store the ch into str[i]
        str[i] = chI; // all characters are stores in char array hence all can be retrived using %s outside the loop

        // increment loop by 1
        i++;

        // ch is not equal to '\n'
    } while (chI != '\n'); // here \n is the enter when you press in the console to move to the next line or terminate the cureent line

    printf("Entered characters are :%s \n ", str); // Entered characters are :a Sana

    /*
Enter the characters
Entered characters are :a Sana //as last time getchar reached to all this Sudha S , hence now it will take from a as per Sudha Sana
*/

    FILE *fp;
    char ch;
    fp = fopen("helloUser.txt", "w");

    printf("Enter data : ");

    // while ((ch = getchar()) != EOF) //it will let to enter the character //due to this it will keep leaving one character and print the other like in Sudha , it print only u h and a (ignoring S and h ass alternate sequence)

    // while ((ch = getchar()) != '\n')//works but it leaves alternate character

    while (ch != '\n') // it works exactly without leaving any character
    /* Enter data : Sudha
Sudha*/

    {
        // printf("Enter data : ");
        ch = getchar();
        putchar(ch);
        putc(ch, fp); // it must be inside //it will put character one by one
    }
    fclose(fp);

    // putc(ch, fp);//this will left with \n once ch came out and then the file pointed will not take any character than the \n , means almost emptied

    /*

    Enter data : hello
    el

    this output when while ((ch = getchar()) != '\n') used  because while condition shifted the position of getchar once for succeding character

    */

    printf("\n\n");

    // fp = fopen("helloUser.txt", "r");

    // while ((ch = getc(fp)) != EOF)
    //     printf("%c", ch);

    // fclose(fp);

    return 0;
}