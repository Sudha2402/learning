#include <stdio.h>
int main()
{
    // int a = 3;
    int a = 9;
label:
    printf("Hello, world! less than 5\n");

    if (a < 5)
    {
        a++;
        goto label;
    }

    printf("This is a test.\n");
end:
    printf("This is the end.\n");

    if (a > 5)
    {
        a--;
        goto end;
        // goto label;
    }

    return 0;
}


/*
output:
Hello, world! less than 5
This is a test.
This is the end.
Hello, world! less than 5
This is a test.
This is the end.
Hello, world! less than 5
This is a test.
This is the end.
Hello, world! less than 5
This is a test.
This is the end.
Hello, world! less than 5
This is a test.
This is the end.
PS C:\Sudhadocuments\C files\C learning> cd "c:\Sudhadocuments\C files\C learning"
PS C:\Sudhadocuments\C files\C learning> cd "c:\Sudhadocuments\C files\C learning\" ; if ($?) { gcc goto.c -o goto } ; if ($?) { .\goto }
Hello, world! less than 5
This is a test.
This is the end.
This is the end.
This is the end.
This is the end.
This is the end.

*/