// C program to find the size of file
#include <stdio.h>

long int findSize(char file_name[])
{
    // opening the file in read mode
    FILE *fp = fopen(file_name, "r");

    // checking if the file exist or not
    if (fp == NULL)
    {
        printf("File Not Found!\n");
        return -1;
    }

    fseek(fp, 0L, SEEK_END); // fp will go to the end of file in one go and this file position will be tracked by ftell //don't think as one by one go in each loop because it is stupid to think such

    // 0L is a long integer value with all the bits set to zero - that's generally the definition of 0 .

    /*
    fseek() is used to move the file pointer associated with a given file to a specific position.

    Syntax of fseek()
    The fseek() syntax is:

    int fseek(FILE *pointer, long int offset, int position);


    Parameters
    pointer: It is the pointer to a FILE object that identifies the stream.

    offset: It is the number of bytes to offset from the position

    // as offset is purakarna or complete , pay karna//offset is also to make the effect of something less strong or noticeable
    // In programming, an offset is a value or position that can be added or subtracted from a starting point to access data or perform calculations. Offsets are commonly used in computer engineering and low-level programming, such as assembly language

    position: It is the position from where the offset is added. Position defines the point with respect to which the file pointer needs to be moved. It has three values:

    SEEK_END: It denotes the end of the file.
    SEEK_SET: It denotes starting of the file.
    SEEK_CUR: It denotes the file pointer’s current position.

    Return Value

    It returns zero if successful, or else it returns a non-zero value.
    */

    // calculating the size of the file
    long int res = ftell(fp); // it is used to obtain the current file position of a stream. It returns a long integer value representing the current position in the file, measured in bytes from the beginning. This function is particularly useful for determining the position to later return to a specific location in a file.

    printf("res  : %ld\n", res); // res  : 20 if new line is present even when no character is there in new line //if no new line and only 10, 20, 30, 40, 50 present in single line then it takes 18 bytes

    // closing the file
    fclose(fp);

    return res;
}

// Driver code
int main()
{
    // char file_name[] = { "a.txt" };
    char file_name[] = {"input.bin"};

    // all charaters other than alphabets and decimal will be ignored in any file like here input.bin is the file name and array will take only index one value 

    // input.bin contains

    /*
    10, 20, 30, 40, 50

    */

    /*

    NOTE:
    Input :  file_name = "a.txt"
             Let "a.txt" contains "geeks"
    Output : 6 Bytes
    There are 5 bytes for 5 characters then an extra
    byte for end of file.

    Input :  file_name = "a.txt"
             Let "a.txt" contains "geeks for geeks"
    Output : 16 Bytes 
    // space will take 1 byte//hence 5+1+3+1+5+1=16

    // but this end of file is not consider when using fseek current position, it is counted when use sizeof() 

    */

    printf("the sizeof( space) %d bytes\n\n",sizeof("  "));//the sizeof( space): 2 bytes //3 bytes if 2 spaces //it is because it is also considering an extra byte for end of file. 


    long int res = findSize(file_name);
    if (res != -1)
        printf("Size of the file is %ld bytes \n", res); // //Size of the file is 20 bytes
    return 0;



    /*
    NOTE: space takes 1 byte because ecah character will take one space as it is converted into string 
    new line after enter created will take 2 bytes
    10 will take 2 bytes that is 1 B for 1 B for 0

    */
}