#include <stdio.h>

int main()
{
    // char str= "Sudha and Shanaya are good friends" ; //error as string is entered in form of array
    char str[] = "Sudha and Shanaya are good friends";
    printf("%s\n", str); // Sudha and Shanaya are good friends

    // gets(str);//it let you to enter or input some data //Hello\0  //don't write \0

    //  int lengthOfStr=sizeof(str);//35
    int lengthOfStr = sizeof(str) / sizeof(str[0]); // 35
    printf("lengthOfStr : %d\n", lengthOfStr);

    // char inpGets=gets(str);//error//initialization makes integer from pointer
    // printf("%s\n",inpGets);

    // char inpGetTry[]=gets(inpGetTry);
    char inpGetTry[] = " "; // OK initialization is necessary even if it is empty for char to take string or you can set size if not want empty string
    // gets(inpGetTry);//input and it gets terminated only after using \0 . and rest code below will execute
    printf("%s\n", inpGetTry); // it print space line if no get is present then it take the initialization data

    char str2[] = {"Sudha and Shanaya are good friends"};
    printf("%s\n", str2); // Sudha and Shanaya are good friends

    // int lengthOfStr2=sizeof(str2)/sizeof(str2[0]);
    // printf("lengthOfStr2 %s\n",lengthOfStr2);//error as {} is present

    char str3[] = {'S', 'u', 'd', 'h', 'a', ' ', 'a', 'n', 'd', ' ', 'S', 'h', 'a', 'n', 'a', 'y', 'a', ' ', 'a', 'r', 'e', ' ', 'g', 'o', 'o', 'd', ' ', 'f', 'r', 'i', 'e', 'n', 'd', 's'};
    printf("%s\n", str3); // Sudha and Shanaya are good friendsSudha and Shanaya are good friends//it don't get terminated because it has no \0 that is backslash 0.

    char str4[] = {'S', 'u', 'd', 'h', 'a', ' ', 'a', 'n', 'd', ' ', 'S', 'h', 'a', 'n', 'a', 'y', 'a', ' ', 'a', 'r', 'e', ' ', 'g', 'o', 'o', 'd', ' ', 'f', 'r', 'i', 'e', 'n', 'd', 's', '\0'};
    printf("%s\n", str4); // Sudha and Shanaya are good friends //it is terminated after printing once

    // C gets() function
    //  The gets() function enables the user to enter some characters followed by the enter key. All the characters entered by the user get stored in a character array. The null character is added to the array to make it a string. The gets() allows the user to enter the space-separated strings. It returns the string entered by the user.

    char s[30];
    printf("Enter the string?\n");
    gets(s);//whatever we will put gets save into s even when size exceed decided 30.
    printf("You entered %s\n", s);

    /*
    Enter the string? Sana
    You entered Sana*/

    int length = sizeof(s); // 30//according to the space reserved not according to the size entered
    // int length=sizeof(s)/s[0];//0//not work when print used %s
    printf("%d\n", length);

    // The gets() function is risky to use since it doesn't perform any array bound checking and keep reading the characters until the new line (enter) is encountered. It suffers from buffer overflow, which can be avoided by using fgets(). The fgets() makes sure that not more than the maximum limit of characters are read. Consider the following example.

    char strf[20];
    printf("Enter the stringf? \n");
    fgets(strf, 20, stdin); // 20 is size and it takes only first 20 characters and ignore rest extra typed
    // input:
    //     ddsdfdfdfdfdfdfdvdsfdfewgtrhtryrgtewfdgdfsgfdgfdbgfdfbfgbfgbfrgtrgrfdvdfv

    printf("%s", strf);
    // output :
    // ddsdfdfdfdfdfdfdvds

    // C puts() function
    // The puts() function is very much similar to printf() function. The puts() function is used to print the string on the console which is previously read by using gets() or scanf() function. The puts() function returns an integer value representing the number of characters being printed on the console. Since, it prints an additional newline character with the string, which moves the cursor to the new line on the console, the integer value returned by puts() will always be equal to the number of characters present in the string plus 1.

    // here console means output terminal

    char name[50];
    printf("Enter your name: "); // Enter your name: Sudha
    gets(name);                  // reads string from user
    printf("Your name is: \n");
    puts(name); // displays string   //Your name is: Sudha

    // printing the string array in form of {}
    char strCurl[] = {'S', 'u', 'd', 'h', 'a', ' ', 'a', 'n', 'd', ' ', 'S', 'h', 'a', 'n', 'a', 'y', 'a', ' ', 'a', 'r', 'e', ' ', 'g', 'o', 'o', 'd', ' ', 'f', 'r', 'i', 'e', 'n', 'd', 's', '\0'};

    printf("strCurl : %s\n", strCurl); // strCurl : Sudha and Shanaya are good friends
    // printing strCurl using loop
    int lengthOfstrCurl = sizeof(strCurl); // 35 //it does count \0 also but if strlen() used then it does not count \0
    printf("lengthOfstrCurl : %d\n", lengthOfstrCurl);
    for (int i = 0; i < lengthOfstrCurl; i++)
    {
        printf("%c\n", strCurl[i]);
    }

    /*
    S
    u
    d
    h
    a

    a
    n
    d

    S
    h
    a
    n
    a
    y
    a

    a
    r
    e

    g
    o
    o
    d

    f
    r
    i
    e
    n
    d
    s

    */

    // using while loop
    int i = 0;
    while (strCurl[i] != '\0')
    { //'\0' must be in single '' , "" will give infinite loop as this condition will never be seen
        printf("%c\n", strCurl[i]);
        i++;
    }

    // Note:Although the sizeof() operator doesn’t require you to include the string.h header file like strlen() does, it returns the total size of the array and not the length of the string.

    // The total size of the array includes the null terminator, \0, whereas the length of the string is the number of characters before the null terminator.

    return 0;
}
