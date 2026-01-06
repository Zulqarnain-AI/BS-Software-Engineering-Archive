#include<iostream>
using namespace std;
main()
{
	int arr[5];
	int min;
	int tem;
	for(int i=0;i<5;i++)
	{
		cin>>arr[i];
	}
		
	for(int i=0;i<5;i++)
	{
		min=i;
		for(int j=i+1;i<5;i++)
		{
		
			if(arr[min]>arr[j])
			{
				
				min=j;
			}
			
			
		}
		tem=arr[min];
		arr[min]=arr[i];
		arr[i]=tem;
	}
	cout<<"output"<<endl;
	for(int i=0;i<5;i++)
	{
		cout<<arr[i]<<endl;
	}
}
