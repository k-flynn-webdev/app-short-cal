# FRONTEND
# app-short-cal

## Create a fancy calendar pages from iCal data
    Friends: Share a easy to read calendar between friends for when you're free or busy thats data safe easy to use and quick. (free)
    Business: Share a department calendar page to easily see when is best for important meetings, eg interviews. (paid)
- A better paper planner among friends?
- Your saving people TIME!!!

### Requirements:
- 100% secure
- one click create & share with no worry
- join 5 calendars no security gdpr safe
- fast click share
- fast click view
- on creation decide if its free days or busy days that are shown
- be able to add a simple one line message/header

### MVP:
- offline (none updating calendar for now) calendar data
- only view data (none edit)
- limited to a months view from a setup date
- only days

### AIM:
User should be able to visit (anom) and create a link to share in 5 clicks tops, 
30 seconds of work and have a safe URL to share. That they can edit in future but only from that computer.

- Go to the website be shown a quick blurb, 
- Click CREATE button (be taken to a new page)
- Click to ADD my calendar (google) (give permission)
- Select a DATE (date from)
- Select a time PERIOD length (month) 
- OPTION to change between (BUSY or FREE) (BUSY default)
- OPTION to add a mini title/heading + name
- DISPLAY in realtime end result of selections
- Click SAVE and SHARE button that copies the URL (taken to the shared URL).
- IF original user that created page be shown a EDIT button 
- All 100% anomalous no name, no data about entries just blocks.

#### RESEARCH
- some companies out there offering a one size fits all calendar API to combine services, could be another business idea to compete with?
- nylas, cronofy both seem to offer my idea, but they BOTH don't show it on their websites. beat them to this. Clunky and annoying. DONT advertise this way, shouldn't need to book a demo in order to see a feature!!! AND it shouldn't be in a video on youtube in order to demo it!!!!! FAIL

##### TODO:
- make small version first that can be shared among friends. just select dates manually `custom-calendar` component until I solve the calendar API issues
- still need to solve how im going to get a users google cal data
- need to call google authorization API AFTER a user has google signed in to increase the scopes that I can access
- add: https://feathers-pinia.pages.dev/guide/service-stores.html
   - local store that interacts with API via Vue Pinia
  
###### PROJECT PLAN:
- User
  - Create
    - Login
    - Logout
- CalBlock
  - Create
    - Name
    - StartDate
    - EndDate
    - AddDates/Import Cals
    - Share CalBlock Output
  - Update (orig/admin)
    - Name
    - StartDate
    - EndDate
    - AddDates/Import Cals
    - Share CalBlock Output
- CalBlockOutput
  - AddDates/Import Cal (non-orig)
  - View CalBlock Output
  - Share CalBlock Output
