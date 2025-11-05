#include <stdio.h>
#include <stdlib.h>

void printArray(int *arr, int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return;
}
int main()
{
    printf("hello countsort\n");
    // int a[] = {12, 31, 25, 8, 32, 17, 40, 42};
    int a[] = {12, 31, 25, 8, 12, 8, 8, 17, 8, 32, 17, 40, 42};

    int n = sizeof(a) / sizeof(a[0]);
    printf("Original array: \n");
    printArray(a, n);
    int max = a[0];
    for (int i = 0; i < n; i++)
    {
        if (a[i] > max)
        {
            max = a[i];
        }
    }
    printf("max is %d\n", max); // max is 42

    int B[max];
    int count;
    for (int i = 0; i <= max; i++)
    {
        count = 0;
        for (int j = 0; j < n; j++)
        {
            if (a[j] == i)
            {
                count++;
            }
        }
        B[i] = count;
    }
    printf("B array where counting stored is :\n");
    printArray(B, max);

    // for back printing all count in original
    int m = 0;
    for (int i = 0; i <= max; i++)
    {
        count = B[i];

        while (count != 0)
        {
            a[m] = i;
            m++;
            count--;
        }
    }
    printf("Sorted array: \n");
    printArray(a, n);     // due to max starting from 0 to max number index , numbers are equal to size
    printf("\n");
    printArray(a, n + 1); // 8 12 17 25 31 32 40 42 6356488 //1 extra is garbage value

    printf("\n");

    return 0;
}

/*
hello countsort
Original array: 
12 31 25 8 12 8 8 17 8 32 17 40 42
max is 42
B array where counting stored is :
0 0 0 0 0 0 0 0 4 0 0 0 2 0 0 0 0 2 0 0 0 0 0 0 0 1 0 0 0 0 0 1 1 0 0 0 0 0 0 0 1 0
Sorted array:
8 8 8 8 12 12 17 17 25 31 32 40 42

8 8 8 8 12 12 17 17 25 31 32 40 42 6356472

PS C:\Sudhadocuments\DSA\DSA> 
*/