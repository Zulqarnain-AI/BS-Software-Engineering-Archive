#include<iostream>
using namespace std;
main()
{
	int n=5;
	int arr[n];
	int tem;
	for(int i=0;i<5;i++)
	{
		cin>>arr[i];
	}
	for(int i=0;i<n;i++)
	{
	
		for(int j=0;i<n-1;i++)
		{
			
			if(arr[j]>arr[j+1])
			{
				
				tem=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=tem;
			}
			
			
		}
	}

	cout<<"output"<<endl;
	for(int i=0;i<n;i++)
	{
		cout<<arr[i]<<endl;
	}
}


