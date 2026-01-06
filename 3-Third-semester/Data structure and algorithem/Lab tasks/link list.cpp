		//link list


#include <iostream>
using namespace std;
struct node{
	int data;
	node* next;
};
node* start=NULL;
node* creat (int );
void insertBig(node*);
void insertend(node*);
void insertmid(node*,int);
void show();
main()
{
	int n1,n2,n3,n4,n5,n;
	cin>>n1>>n2>>n3>>n4>>n5;
	node* ptr1=creat(n1);
	node* ptr2=creat(n2);
	node* ptr3=creat(n3);
	node* ptr4=creat(n4);
	node* ptr5=creat(n5);
	//insertBig(ptr1);
	//insertBig(ptr2);
	//insertBig(ptr3);
	insertend(ptr1);
	insertend(ptr2);
	insertend(ptr3);
	insertend(ptr4);
	insertend(ptr5);
//	cout<<"\n  enter position\n  ";
//	cin>>n;
	//insertmid(ptr5,n);
	show();
}
node* creat (int n)
{
	node* ptr=new node;
	if(ptr==NULL)
	{
		cout<<"full";
	}
	else 
	{
		ptr->data=n;
		ptr->next=NULL;
	}
	return ptr;
}
void insertBig(node* ptr)
{
	if(start==NULL)
	{
		start=ptr;
	}
	else
	{
		ptr->next=start;
		start=ptr;
	}
}
void insertend(node* ptr)
{
	node* tem=start;
	if(start==NULL)
	start=ptr;
	else
	{
		while(tem->next!=NULL)
	{
		tem=tem->next;
	}
	tem->next=ptr;
	}
	
}
void insertmid(node* ptr,int n)
{
	node* tem=start;
	for(int i=1;i<n;i++)
	{
		tem=tem->next;
	}
	ptr->next=tem->next;
	tem->next=ptr;
}
void show()
{
//	node* tem=start;
//	cout<<tem->data<<endl;
//	tem=tem->next;
//	cout<<tem->data;
//node* tem=start;


//while(tem->next!=NULL)
//{
//	tem=tem->next;
//}
//cout<<start->data<<endl<<tem->data;

int n=start->data;
node* tem=start;
while(tem->next!=NULL)
{
	tem=tem->next;
}



}
void sortAss()
{
	node* loc;
	int min=start->data;
	node* tem=start;
	while(tem!=NULL)
	{
		
		for(node* j=tem->next;j!=NULL;j=j->next)
		{
			if(min>j->data)
			{
				min=j->data;
				loc=j;
			}
			
			
		}
		loc->data=tem->data;
		tem->data=min;
		
		
	}
}
