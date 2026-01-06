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
	//{1,2,3,4,5}
	for(int i=0;i<5;i++)
	{
		min=arr[i];//3,2
		for(int j=i+1;i<5;i++)
		{
			if(min>arr[j])
			{
				min=arr[j];//2,1
				tem=j;//1,2
			}
			
			
		}
		arr[tem]=arr[i];
		arr[i]=min;
	}
	cout<<"output"<<endl;
	for(int i=0;i<5;i++)
	{
		cout<<arr[i]<<endl;
	}
}
