#include <stdio.h>

void printArray(int *arr, int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
    return;
}

void selectionSort(int *arr, int size)
{
    int i, j, temp, min, insi; // insi works
    for (i = 0; i < size - 1; i++)
    {
        printf("arr[%d] :%d \n", i, arr[i]);
        min = arr[i];
        // temp=i;//works
        insi = 0; // works
        for (j = i + 1; j < size - 1; j++)
        {
            // insi=0;//this insi inside the for loop will be 0 at last when j no more enters in the if condition hence enven if insi hits 1 inside if then in next loop of j if it does not go inside if then it will upadte insi to 0 as if it not even wented to if condition .hence initialise insi outside not here

            if (arr[j] < min) // swap
            {

                min = arr[j];
                temp = j;
                insi = 1;
            }
        }

        // if (temp != i)//works
        if (insi) // works as insi is only updated to 1 once in for j loop for if it gets inside if condition
        {
            arr[temp] = arr[i];
            arr[i] = min;
        }
        printArray(arr, size); // this arr is affected globally as pointer is passed hence it selectionSort2 , this arr will be aready sorted
    }
    return;
}

void selectionSort2(int *arr, int size)
{
    int temp, minindex;
    for (int i = 0; i < size - 1; i++)
    {
        printf("arr[%d] :%d \n", i, arr[i]);
        minindex = i;

        for (int j = i + 1; j < size - 1; j++)
        {
            // insi=0;//this insi inside the for loop will be 0 at last when j no more enters in the if condition hence enven if insi hits 1 inside if then in next loop of j if it does not go inside if then it will upadte insi to 0 as if it not even wented to if condition .hence initialise insi outside not here

            if (arr[j] < arr[minindex]) // swap
            {

                minindex = j;
            }
        }

        if (minindex != i)
        {
            temp = arr[i];
            arr[i] = arr[minindex];
            arr[minindex] = temp;
        }
        printArray(arr, size);
    }
    return;
}

int main()
{
    printf("Hello selection sort\n");
    int arr[] = {64, 34, 25, 12, 22, 11, 90, 7, 8, 9};

    int n = sizeof(arr) / sizeof(arr[0]);
    printf("originl array :\n");
    printArray(arr, n);
    selectionSort(arr, n); // this will affect arr globally
    printf("sorted array :\n");
    printArray(arr, n);
    printf("\n");
    int arr2[] = {64, 34, 25, 12, 22, 11, 90, 7, 8, 9};
    int n2 = sizeof(arr2) / sizeof(arr2[0]);
    printf("original array :\n");
    printArray(arr2, n);
    selectionSort2(arr2, n);
    printf("sorted array :\n");
    printArray(arr2, n);

    return 0;
}

/*

Hello selection sort
originl array :
64 34 25 12 22 11 90 7 8
arr[0] :64
7 34 25 12 22 11 90 64 8
arr[1] :34
7 8 25 12 22 11 90 64 34
arr[2] :25
7 8 11 12 22 25 90 64 34
arr[3] :12
7 8 11 12 22 25 90 64 34
arr[4] :22
7 8 11 12 22 25 90 64 34
arr[5] :25
7 8 11 12 22 25 90 64 34
arr[6] :90
7 8 11 12 22 25 34 64 90
arr[7] :64
7 8 11 12 22 25 34 64 90
arr[8] :90
7 8 11 12 22 25 34 64 90
sorted array :
7 8 11 12 22 25 34 64 90

original array :
64 34 25 12 22 11 90 7 8
arr[0] :64
7 34 25 12 22 11 90 64 8
arr[1] :34
7 8 25 12 22 11 90 64 34
arr[2] :25
7 8 11 12 22 25 90 64 34
arr[3] :12
7 8 11 12 22 25 90 64 34
arr[4] :22
7 8 11 12 22 25 90 64 34
arr[5] :25
7 8 11 12 22 25 90 64 34
arr[6] :90
7 8 11 12 22 25 34 64 90
arr[7] :64
7 8 11 12 22 25 34 64 90
arr[8] :90
7 8 11 12 22 25 34 64 90
sorted array :
7 8 11 12 22 25 34 64 90
PS C:\Sudhadocuments\DSA\DSA>

*/