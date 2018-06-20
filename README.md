<div style="width: 100%; text-align: center; color: #AEEA00">URESP</div>

to start in development mode, run:
```
1. npm install
2. npm start
```

to start in production mode, run:
```
1. npm install
2. npm start:production
```

to start in test mode, run:
```
1. npm install
2. npm start:tunnel
```

Description

	With the help of the technologies listed above:
	Create a website with a contact form and an administrative section, accessible only to logged in users, that will allow them to view the contact form submissions through a list.


Menu

1. Home
2. Contact form
3. Sign in (so the admin can login)
	-> If logged in, display the menu item Logout.
4. Administration
	-> Only displayed when logged in.


Home page
	Welcome message with a beautiful banner.

Contact form page
	A form accessible to all, with the following fields:
	All fields are mandatory.
	First Name
	Last Name
	Email address
	Validate email address syntax.
	Telephone
	Validate telephone number syntax.
	(000) 000-0000
	Address
	City
	State
	Zip
	Validate canadian zip code syntax.
	Country
	Comments

Admin page
	Display a list with all contact form submissions.
	When we click on a record, display a pop-up dialog with the informations entered in the form.

Display in console
	With the help of React Redux and the console.log() function, you must log the following events.
	-> When viewing the home page.
	-> When clicking an a menu item.
	-> Display selected item.
	-> When signing in.
	-> Display the logged in user.
	-> When signing out.
	-> Display the logged out user.
	-> When submitting the form.
	-> When viewing the details of the form submission.
	-> Display the record _id of the form submission.
