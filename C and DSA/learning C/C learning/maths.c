#include <stdio.h>
int main()
{
    int n, i, j, k, l, m, count = 0, sum = 0, max = 0, min = 0, avg = 0;

    printf("Enter the number of elements: ");
    scanf("%d", &n);
    int arr[n];
    for (i = 0; i < n; i++)
    {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &arr[i]);
    }
    for (i = 0; i < n; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
        if (arr[i] < min)
        {
            min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / n;
    printf("Maximum element is: %d\n", max);
    printf("Minimum element is: %d\n", min);
    printf("Average of elements is: %d\n", avg);

    /*
    Enter the number of elements: 3
Enter element 1: 2
Enter element 2: 5
Enter element 3: 1
Maximum element is: 5
Minimum element is: 1
Average of elements is: 2
    */
}
