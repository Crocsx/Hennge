# Improvable : 

## Code :

- The way the sort is displayed is a bit of a mess (the part with the % === 0), eventually, the component should be rewritten with using a class, in order to use a more precise component state and allow different type of sorting and not just desc/asc/none)
- Some linting, and some lisibility changes

## UI :
- Add more filter (search by text, filter by mail...) in order for the user to control what he is looking more effiently. 
- It's a console like app, so sometime it's better to be simple and to the point than add some structural design. Nontheless, I would change the sender / destinatary part and add the mail inside colored pills based on the mail. so visually you can quickly group the mails. 
- Add a tooltip to the "destinatary" category over the "+1" "+2" in order to see all the Search Results
- It will need some pagination when there is a lot of emails, or infinite scrolling. (I personally prefer the pagination)
- Since it's an app for security incidents, I would add some preset regex (like ip adress, email, adress phone number...) and higlight in red all the mail or keyword that contain one of those preset values.
- At the moment, I display the mail preview with a tooltip set to 3 second. I would like instead to add a simple button preview at the end row that would expand (like an accordion https://material.angular.io/components/expansion/overview) to display the preview. ALSO, It woulkd be nice to add one notification pill over this button in case the content of the message contain sensitive data (check point above) 


# Description:
Suppose we have a system which archives emails of an organization. In the event of security incidents (such as leakage of sensitive information via emails), this system will be used by the organization's auditing department to retrieve and verify the emails of the concerning parties through its admin console. We would like you to design the user interface (UI) mockup for this system.

# Mission 1: Design the UI using the given images
Assignment: Inside files.zip, you will find a UI design file created by our designer (result.pdf) and accompanying images. Create the UI mockup using HTML, CSS, Javascript, etc. based on the design. You can use any framework or just vanilla JS to build this mockup.

# Mission 2: Extend the UI in order to implement a new feature
Assignment: In the search result section, extend the UI mockup so that user can inspect the body of each emails from the search result.

# Mission 3: Indicate UI parts that can be improved
Assignment: From the provided design, state your opinion on UI parts that can be improved, including the reason why and how you would improve them.


# Rules:
- Please use the images that we provide for the assignments.
- Please produce high-fidelity UI mockup for the assignments.
- Any fixed sample texts can be used as the data within the UI.
- For Mission 2: The extended design should allow user to inspect multiple email bodies at once.

# Submission:
- The final UI mockup.
- A list of your suggested improvements.
- A report describing your efforts in the process of completing the missions above.
- Push your project into a 'private' GitHub repository, and then invite '@henngechallenge' as a collaborator. Then kindly reply to this email with the URL of your GitHub repository.