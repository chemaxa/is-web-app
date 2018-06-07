#  Internet shopping web application.

Required libraries and frameworks:
- Angularjs
- Twitter	bootstrap	
- Use	other	components	and	libraries	by	preference,	if	it	isn’t	specify	
- Application	should	works	on	the	Chrome,	Firefox,	Safari	and	IE	current	and	previous	versions

Test	project	has	3	pages:	search	page,	login	page,	sign	up	page.
It	should	be	single	page	application	
## Sign up page:
Should	has	"Sign	up"	button	and	3	fields:	**email**,	**password**	and	**password	confirm**.		

When	user	presses	"Sign	up"	button,	app	should	validate	email	field.	As	well	as	password	and	password	confirm	should	be	identical.

Error	message	should	be shown	on	the	top	of	the	page,	if	validation	failed.	
If	email	and	password	are	corrected,	auth	info	should	be	stored	in	the	local	storage.	Password	should	be	stored	as	hash.	
		
## Log in page
Has	Email	and	password	fields.	
After	pressing	"Log	in"	button,	auth	info	checked	and	user	authorized.	
			
## Search page:
Allowed	for	authorized	users	only.	
Search	page	should	has	item's	filter	and	item's	list.	When	any	filter	is	changed,	item's	list	reloaded	according	enabled	filters.	Page	shouldn't	be	reloaded,	just item's	list.	User	can	add	item	in	the	his	cart.	

Items	list	should	be	as	static	json	file.

Item's	fields:	
- Id	
- Name	
- Color	(Red,	White,	Black,	Blue,	Yellow,	Green)	
- Issue	date	(should	be	in	US	format)
- Price	-	float	(should	be	in	US	format)	
- Raiting	-	float	(should	be	as	5	stars.	Should	be	implemented	as angular	directive	by	hand	on	pure	js)
- InStock	
- Image