# README

## RESTful approach for API convention

Url format would be : http://yourdomain.com/api/{scope}/{object}/{identity}/{action}

**Example:**

```text
// Get user list
GET /api/user

// Get user detail
GET /api/user/1

// Create user
POST /api/user

// Update user
PUT /api/user/1

// Delete user (soft or hard delete)
DELETE /api/user/1

// Activate user
PUT /api/user/1/activate

// Deactivate user
PUT /api/user/1/deactivate

// Master data for user dropdown list
GET /api/user/datasource

```



## Pull request

When you create a pull request, please use following format in your pull request description:

```markdown
* Bug Fixes:
    * N/A

* Features:
    * N/A

* Breaking Changes:
    * N/A

* Improvements:
    * N/A

* NOTE:
    * Update DB structure: No
    * Update DB Data: No
    * Impact to App: No
```

And you should put your Task Id in the description
And you should put all your Task Id in the commit message

**Example :**

Commit message: SAP-1 Fix login page because of missing validation in the UI

```markdown
* Bug Fixes:
    * SAP-1 Fix login page because of missing validation in the UI

* Features:
    * N/A

* Breaking Changes:
    * N/A

* Improvements:
    * N/A

* NOTE:
    * Update DB structure: No
    * Update DB Data: No
    * Impact to App: Yes
```