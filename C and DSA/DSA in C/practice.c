#include <stdio.h>

void bubble_sort(int arr[], int size)
{
    for (int k = size - 1 ; k >=0 ; k--)
    {
        int j;
        for (int i = 0; i <= k; i++)
        {
            
        
            j = i + 1;
            if (arr[i] > arr[j])
            {
                int swap = arr[j];
                arr[j] = arr[i];
                arr[i] = swap;
            }
        }
    }
}

void create_Array(int arr[], int size)
{
    for (int i = 0; i < size-1; i++)
    {
        int val;
        printf("Enter value at index %d :", i);
        scanf("%d", &val);
        arr[i] = val;
    }
    
    
}

void show(int arr[],int size){
    for(int i = 0; i < size; i++){
        printf("%d\t",arr[i]);
    }
}

int main()
{
    int n;
    printf("enter the size of array:");
    scanf("%d", &n);
    int arr[n];
    create_Array(arr, n);
    bubble_sort(arr, n);
    show(arr,n);

    return 0;
}