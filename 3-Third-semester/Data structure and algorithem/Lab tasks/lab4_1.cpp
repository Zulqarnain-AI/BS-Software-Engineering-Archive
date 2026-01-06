                         //lab4_1
#include<iostream>
using namespace std;
struct node{
	int data;
	node* next;
	
};
node* start=NULL;
node* creat(int);
void insertbeg(node*);
void insertend(node*);
void insertmid(int ,node*);
void show();
main()
{
	int n1,n2,n3,n4,n;
	cout<<"enter numbers:  ";
	cin>>n1>>n2>>n3>>n4;
	node* p1=creat(n1);
	node* p2=creat(n2);
	node* p3=creat(n3);
	node* p4=creat(n4);
	insertbeg(p1);
	insertbeg(p2);
	insertend(p3);
	cout<<"enter a position";
	cin>>n;
	insertmid(n,p4);
	show();
	
}
node* creat(int n)
{
	node* p=new node;
	if(p==NULL)
	{
		cout<<"memory is full: ";
	}
	p->data=n;
	p->next=NULL;
	return p;
}
void insertbeg(node* p)
{
	node* tem;
	if(start==NULL)
	{
		start=p;
	}
	else
	{
	tem=start;
	start=p;
	p->next=tem;
	}
	
}
void insertend(node* p)
{   
   
	node* tem=start;
	while(tem->next!=NULL)
	{
		
		tem=tem->next;
	}
	tem->next=p;
}
void insertmid(int n,node* p)

{
	node* tem=start;
	for(int i=1;i<n;i++)
	{
		tem=tem->next;
	}
	p->next=tem->next;
	tem->next=p;
	
}
void show()
{
	node* tem=start;
	while(tem!=NULL)
	{
		cout<<tem->data<<endl;
		tem=tem->next;
	}
}

