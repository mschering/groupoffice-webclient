angular.module("GO.Core")
		.config(["GO.Core.Providers.TranslateProvider", function (TranslateProvider) {
				TranslateProvider.addTranslations("gr", 
					{
    "GO\\Core\\Cron\\Model\\Job": "\u0395\u03c1\u03b3\u03b1\u03c3\u03af\u03b1",
    "Group management": "\u0394\u03b9\u03b1\u03c7\u03b5\u03af\u03c1\u03b9\u03c3\u03b7 \u03bf\u03bc\u03ac\u03b4\u03b1\u03c2",
    "User management": "\u0394\u03b9\u03b1\u03c7\u03b5\u03af\u03c1\u03b9\u03c3\u03b7 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7",
    "Custom fields": "\u03a0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03c3\u03bc\u03ad\u03bd\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1",
    "Announcements": "\u0391\u03bd\u03b1\u03ba\u03bf\u03b9\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2",
    "Yes": "\u039d\u03b1\u03b9",
    "No": "\u038c\u03c7\u03b9",
    "Edit": "\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1",
    "Continue": "\u03a3\u03c5\u03bd\u03ad\u03c7\u03b5\u03b9\u03b1",
    "Delete": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae",
    "Cancel": "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
    "Save": "\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7",
    "Back": "\u0395\u03c0\u03b9\u03c3\u03c4\u03c1\u03bf\u03c6\u03ae",
    "OK": "OK",
    "Search": "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7",
    "Login": "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
    "Username": "\u038c\u03bd\u03bf\u03bc\u03b1 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7",
    "Password": "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",
    "Login to GroupOffice": "\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7 \u03c3\u03c4\u03b7\u03bd \u039f\u03bc\u03ac\u03b4\u03b1 \u0393\u03c1\u03b1\u03c6\u03b5\u03af\u03bf\u03c5",
    "Access denied": "\u0386\u03c1\u03bd\u03b7\u03c3\u03b7 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",
    "Are you sure you want to delete '{name}'?": "\u0398\u03ad\u03bb\u03b5\u03c4\u03b5 \u03c3\u03af\u03b3\u03bf\u03c5\u03c1\u03b1 \u03bd\u03b1 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03c8\u03b5\u03c4\u03b5 \u03c4\u03bf\u03bd \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7 '{name}';",
    "Share": "\u039a\u03bf\u03b9\u03bd\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7",
    "Group": "\u039f\u03bc\u03ac\u03b4\u03b1",
    "Loading...": "\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7\u2026",
    "Remember my login": "\u039d\u03b1 \u03bc\u03b5 \u03b8\u03c5\u03bc\u03ac\u03c3\u03b1\u03b9",
    "Field set": "\u03a3\u03cd\u03bd\u03bf\u03bb\u03bf \u03c0\u03b5\u03b4\u03af\u03c9\u03bd",
    "Name": "\u038c\u03bd\u03bf\u03bc\u03b1",
    "Model": "\u039c\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf",
    "Fields": "\u03a0\u03b5\u03b4\u03af\u03b1",
    "Field": "\u03a0\u03b5\u03b4\u03af\u03bf",
    "Type": "\u03a4\u03cd\u03c0\u03bf\u03c2",
    "Database name": "\u038c\u03bd\u03bf\u03bc\u03b1 \u03b2\u03ac\u03c3\u03b7\u03c2 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd",
    "Default value": "\u03a0\u03c1\u03bf\u03ba\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03b7 \u03c4\u03b9\u03bc\u03ae",
    "Placeholder": "\u03a7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2 \u03ba\u03c1\u03ac\u03c4\u03b7\u03c3\u03b7\u03c2 \u03b8\u03ad\u03c3\u03b7\u03c2",
    "Field is required": "\u03a4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03b5\u03af\u03bd\u03b1\u03b9 \u03c5\u03c0\u03bf\u03c7\u03c1\u03b5\u03c9\u03c4\u03b9\u03ba\u03cc",
    "Field can be filtered on": "\u03a3\u03c4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03b9\u03c3\u03c7\u03cd\u03c3\u03b5\u03b9 \u03c6\u03af\u03bb\u03c4\u03c1\u03bf",
    "Max length": "\u039c\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2",
    "Height": "\u038e\u03c8\u03bf\u03c2",
    "Select options": "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",
    "Field sets": "\u03a3\u03cd\u03bd\u03bf\u03bb\u03b1 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5",
    "Properties": "\u0399\u03b4\u03b9\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2",
    "Enabled": "\u0395\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7",
    "E-mail": "Email",
    "Confirm password": "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",
    "Groups": "\u039f\u03bc\u03ac\u03b4\u03b5\u03c2",
    "No groups selected": "\u0394\u03b5\u03bd \u03ad\u03c7\u03bf\u03c5\u03bd \u03b5\u03c0\u03b9\u03bb\u03b5\u03c7\u03b8\u03b5\u03af \u03bf\u03bc\u03ac\u03b4\u03b5\u03c2",
    "View profile": "\u03a0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae \u03c0\u03c1\u03bf\u03c6\u03af\u03bb",
    "Created at": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b9\u03c2",
    "Modified at": "\u03a4\u03c1\u03bf\u03c0\u03bf\u03c0\u03bf\u03b9\u03ae\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b9\u03c2",
    "Select groups": "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03bf\u03bc\u03ac\u03b4\u03c9\u03bd",
    "Date": "\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1",
    "To": "\u03a0\u03c1\u03bf\u03c2",
    "by": "\u03b1\u03c0\u03cc",
    "No items found": "\u0394\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03b1",
    "New post": "\u039d\u03ad\u03b1 \u03b4\u03b7\u03bc\u03bf\u03c3\u03af\u03b5\u03c5\u03c3\u03b7",
    "Title": "\u03a4\u03af\u03c4\u03bb\u03bf\u03c2",
    "Group name": "\u038c\u03bd\u03bf\u03bc\u03b1 \u03bf\u03bc\u03ac\u03b4\u03b1\u03c2",
    "Grant permission to new items automatically": "\u03a7\u03bf\u03c1\u03ae\u03b3\u03b7\u03c3\u03b7 \u03ac\u03b4\u03b5\u03b9\u03b1\u03c2 \u03c3\u03b5 \u03bd\u03ad\u03b1 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03b1 \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03b1",
    "Enabled modules": "\u0395\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03bc\u03ad\u03bd\u03b5\u03c2 \u03bc\u03bf\u03bd\u03ac\u03b4\u03b5\u03c2",
    "Use access": "\u03a7\u03c1\u03ae\u03c3\u03b7 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",
    "Create access": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",
    "Users in group": "\u03a7\u03c1\u03ae\u03c3\u03c4\u03b5\u03c2 \u03c3\u03c4\u03b7\u03bd \u03bf\u03bc\u03ac\u03b4\u03b1",
    "No users selected": "\u0394\u03b5\u03bd \u03ad\u03c7\u03bf\u03c5\u03bd \u03b5\u03c0\u03b9\u03bb\u03b5\u03c7\u03b8\u03b5\u03af \u03c7\u03c1\u03ae\u03c3\u03c4\u03b5\u03c2",
    "Route": "\u0394\u03c1\u03bf\u03bc\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7",
    "GET Parameters": "\u039b\u0397\u03a8\u0397 \u03c0\u03b1\u03c1\u03b1\u03bc\u03ad\u03c4\u03c1\u03c9\u03bd",
    "Add parameter": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c0\u03b1\u03c1\u03b1\u03bc\u03ad\u03c4\u03c1\u03bf\u03c5",
    "Restore": "\u0395\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac",
    "Content": "\u03a0\u03b5\u03c1\u03b9\u03b5\u03c7\u03cc\u03bc\u03b5\u03bd\u03bf",
    "Add todo item": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5 \u03b5\u03ba\u03ba\u03c1\u03b5\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2",
    "Done": "\u0388\u03b3\u03b9\u03bd\u03b5",
    "Close": "\u039a\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf",
    "Filters": "\u03a6\u03af\u03bb\u03c4\u03c1\u03b1",
    "Reset": "\u0395\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac",
    "Pin": "\u039a\u03b1\u03c1\u03c6\u03af\u03c4\u03c3\u03c9\u03bc\u03b1",
    "Gender": "\u03a6\u03cd\u03bb\u03bf",
    "Tags": "\u0395\u03c4\u03b9\u03ba\u03ad\u03c4\u03b5\u03c2",
    "Enter tags...": "\u0395\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03b5\u03c4\u03b9\u03ba\u03b5\u03c4\u03ce\u03bd\u2026",
    "Add files": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b1\u03c1\u03c7\u03b5\u03af\u03c9\u03bd",
    "Rename": "\u039c\u03b5\u03c4\u03bf\u03bd\u03bf\u03bc\u03b1\u03c3\u03af\u03b1",
    "Phone numbers": "\u0391\u03c1\u03b9\u03b8\u03bc\u03bf\u03af \u03c4\u03b7\u03bb\u03b5\u03c6\u03ce\u03bd\u03bf\u03c5",
    "Company": "\u0395\u03c4\u03b1\u03b9\u03c1\u03b5\u03af\u03b1",
    "yr": "\u03b5\u03c4",
    "Address": "\u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7",
    "Employees": "\u03a5\u03c0\u03ac\u03bb\u03bb\u03b7\u03bb\u03bf\u03b9",
    "Notes": "\u03a3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03b9\u03c2",
    "Files": "\u0391\u03c1\u03c7\u03b5\u03af\u03b1",
    "Comments": "\u03a3\u03c7\u03cc\u03bb\u03b9\u03b1",
    "Projects": "\u0388\u03c1\u03b3\u03b1",
    "Contracts": "\u03a3\u03c5\u03bc\u03b2\u03cc\u03bb\u03b1\u03b9\u03b1",
    "Invoices": "\u03a4\u03b9\u03bc\u03bf\u03bb\u03cc\u03b3\u03b9\u03b1",
    "Quotes": "\u03a0\u03c1\u03bf\u03c3\u03c6\u03bf\u03c1\u03ad\u03c2",
    "at": "\u03c3\u03c4\u03b9\u03c2",
    "Open": "\u0391\u03bd\u03bf\u03b9\u03c7\u03c4\u03cc",
    "Unknown": "\u0386\u03b3\u03bd\u03c9\u03c3\u03c4\u03bf",
    "Male": "\u0386\u03bd\u03b4\u03c1\u03b1\u03c2",
    "Female": "\u0393\u03c5\u03bd\u03b1\u03af\u03ba\u03b1",
    "Special dates": "\u0395\u03b9\u03b4\u03b9\u03ba\u03ad\u03c2 \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b5\u03c2",
    "Add special date": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b5\u03b9\u03b4\u03b9\u03ba\u03ae\u03c2 \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1\u03c2",
    "Add e-mail address": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2 email",
    "Phone": "\u03a4\u03b7\u03bb\u03ad\u03c6\u03c9\u03bd\u03bf",
    "Add phone number": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b1\u03c1\u03b9\u03b8\u03bc\u03bf\u03cd \u03c4\u03b7\u03bb\u03b5\u03c6\u03ce\u03bd\u03bf\u03c5",
    "Add tags...": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b5\u03c4\u03b9\u03ba\u03b5\u03c4\u03ce\u03bd",
    "Create new company": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03bd\u03ad\u03b1\u03c2 \u03b5\u03c4\u03b1\u03b9\u03c1\u03b5\u03af\u03b1\u03c2",
    "Addresses": "\u0394\u03b9\u03b5\u03c5\u03b8\u03cd\u03bd\u03c3\u03b5\u03b9\u03c2",
    "Street address": "\u039f\u03b4\u03cc\u03c2",
    "Zip code": "\u03a4.\u039a.",
    "City": "\u03a0\u03cc\u03bb\u03b7",
    "State \/ Province \/ Region": "\u03a0\u03bf\u03bb\u03b9\u03c4\u03b5\u03af\u03b1\/ \u0395\u03c0\u03b1\u03c1\u03c7\u03af\u03b1 \/ \u03a0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ae",
    "Country": "\u03a7\u03ce\u03c1\u03b1",
    "Add address": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2",
    "New Comment": "\u039d\u03ad\u03bf \u03c3\u03c7\u03cc\u03bb\u03b9\u03bf",
    "Timeline": "\u03a7\u03c1\u03bf\u03bd\u03bf\u03bb\u03cc\u03b3\u03b9\u03bf",
    "This name is already taken": "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c5\u03c0\u03ac\u03c1\u03c7\u03b5\u03b9 \u03ae\u03b4\u03b7",
    "This field is required": "\u03a4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03b5\u03af\u03bd\u03b1\u03b9 \u03c5\u03c0\u03bf\u03c7\u03c1\u03b5\u03c9\u03c4\u03b9\u03ba\u03cc",
    "The password is not strong enough.": "\u039f \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2 \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c1\u03ba\u03b5\u03c4\u03ac \u03b9\u03c3\u03c7\u03c5\u03c1\u03cc\u03c2.",
    "It must be at least {minLength} characters long.": "\u03a0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd {minLength} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2.",
    "It must be at least {minUniqueChars} unique characters.": "\u03a0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 \u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd {minUniqueChars} \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03bf\u03cd\u03c2 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2.",
    "It must have an uppercase character.": "\u03a0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 \u03ad\u03bd\u03b1\u03bd \u03ba\u03b5\u03c6\u03b1\u03bb\u03b1\u03af\u03bf \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1.",
    "It must have a lowercase character.": "\u03a0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 \u03ad\u03bd\u03b1\u03bd \u03c0\u03b5\u03b6\u03cc \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1.",
    "It must have a number in it.": "\u03a0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 \u03ad\u03bd\u03b1\u03bd \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc.",
    "The e-mail address is invalid": "\u0397 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 email \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7",
    "Disabled": "\u0391\u03c0\u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03ae\u03b8\u03b7\u03ba\u03b5",
    "Checked": "\u0395\u03bb\u03ad\u03b3\u03c7\u03b8\u03b7\u03ba\u03b5",
    "UnChecked": "\u0394\u03b5\u03bd \u03b5\u03bb\u03ad\u03b3\u03c7\u03b8\u03b7\u03ba\u03b5",
    "Login failed": "\u0397 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7 \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5",
    "Work": "\u0395\u03c1\u03b3\u03b1\u03c3\u03af\u03b1",
    "Home": "\u039f\u03b9\u03ba\u03af\u03b1",
    "Billing": "\u03a7\u03c1\u03ad\u03c9\u03c3\u03b7",
    "Other": "\u0386\u03bb\u03bb\u03bf",
    "Mobile": "\u039a\u03b9\u03bd\u03b7\u03c4\u03cc \u03c4\u03b7\u03bb\u03ad\u03c6\u03c9\u03bd\u03bf",
    "Birthday": "\u0393\u03b5\u03bd\u03ad\u03b8\u03bb\u03b9\u03b1",
    "Anniversary": "\u0395\u03c0\u03ad\u03c4\u03b5\u03b9\u03bf\u03c2",
    "The form contains errors. Please check your input.": "\u03a4\u03bf \u03ad\u03bd\u03c4\u03c5\u03c0\u03bf \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 \u03c3\u03c6\u03ac\u03bb\u03bc\u03b1\u03c4\u03b1. \u0395\u03bb\u03ad\u03b3\u03be\u03c4\u03b5 \u03c4\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u03c0\u03bf\u03c5 \u03ad\u03c7\u03b5\u03c4\u03b5 \u03b5\u03b9\u03c3\u03ac\u03b3\u03b5\u03b9.",
    "Age": "\u0397\u03bb\u03b9\u03ba\u03af\u03b1",
    "Your changes have been saved": "\u039f\u03b9 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c4\u03b7\u03ba\u03b1\u03bd",
    "Your password has been changed": "\u039f \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2 \u03ac\u03bb\u03bb\u03b1\u03be\u03b5",
    "You entered an incorrect username or password": "\u0388\u03c7\u03b5\u03c4\u03b5 \u03b5\u03b9\u03c3\u03ac\u03b3\u03b5\u03b9 \u03b5\u03c3\u03c6\u03b1\u03bb\u03bc\u03ad\u03bd\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7 \u03ae \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2.",
    "Please wait": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03c0\u03b5\u03c1\u03b9\u03bc\u03ad\u03bd\u03b5\u03c4\u03b5",
    "Number of logins": "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c3\u03c5\u03bd\u03b4\u03ad\u03c3\u03b5\u03c9\u03bd",
    "Last login": "\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b1 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
    "January": "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2",
    "February": "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2",
    "March": "\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2",
    "April": "\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2",
    "May": "\u039c\u03ac\u03b9\u03bf\u03c2",
    "June": "\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2",
    "July": "\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2",
    "August": "\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2",
    "September": "\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2",
    "October": "\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2",
    "November": "\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2",
    "December": "\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2",
    "Monday": "\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1",
    "Tuesday": "\u03a4\u03c1\u03af\u03c4\u03b7",
    "Wednesday": "\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7",
    "Thursday": "\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7",
    "Friday": "\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae",
    "Saturday": "\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf",
    "Sunday": "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae",
    "Intermesh\\Modules\\Contacts\\Model\\Contact": "\u0386\u03c4\u03bf\u03bc\u03bf \u03b5\u03c0\u03b1\u03c6\u03ae\u03c2",
    "Add": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7",
    "Drag to reorder": "\u03a3\u03cd\u03c1\u03b5\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03b1\u03bd\u03b1\u03b4\u03b9\u03ac\u03c4\u03b1\u03be\u03b7",
    "Sort": "\u039a\u03b1\u03c4\u03ac\u03c4\u03b1\u03be\u03b7",
    "Ascending": "\u0391\u03bd\u03bf\u03b4\u03b9\u03ba\u03ac",
    "Descending": "\u039a\u03b1\u03b8\u03bf\u03b4\u03b9\u03ba\u03ac",
    "Description": "\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",
    "Undo delete": "\u0391\u03bd\u03b1\u03af\u03c1\u03b5\u03c3\u03b7 \u03b4\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae\u03c2",
    "Language": "\u0393\u03bb\u03ce\u03c3\u03c3\u03b1",
    "Info": "\u03a0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2",
    "Email": "Email",
    "Amount": "\u03a0\u03bf\u03c3\u03cc",
    "Quantity": "\u03a0\u03bf\u03c3\u03cc\u03c4\u03b7\u03c4\u03b1",
    "Save changes": "\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ce\u03bd",
    "Do you want to save your changes?": "\u0398\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2;",
    "Discard": "\u0391\u03c0\u03cc\u03c1\u03c1\u03b9\u03c8\u03b7",
    "A stupid question": "\u0391\u03bd\u03cc\u03b7\u03c4\u03b7 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7",
    "Do you really want to edit this contact?": "\u0398\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b5\u03af\u03c4\u03b5 \u03b1\u03c5\u03c4\u03ae \u03c4\u03b7\u03bd \u03b5\u03c0\u03b1\u03c6\u03ae;",
    "No, take me away!": "\u038c\u03c7\u03b9, \u03b1\u03bb\u03bb\u03b1\u03b3\u03ae \u03c0\u03b1\u03c1\u03b1\u03b8\u03cd\u03c1\u03bf\u03c5!",
    "Saved successfully": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03b1\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7",
    "Years": "\u03a7\u03c1\u03cc\u03bd\u03b9\u03b1",
    "Months": "\u039c\u03ae\u03bd\u03b5\u03c2",
    "Weeks": "\u0395\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b5\u03c2",
    "Days": "\u0397\u03bc\u03ad\u03c1\u03b5\u03c2",
    "Hours": "\u038f\u03c1\u03b5\u03c2",
    "Minutes": "\u039b\u03b5\u03c0\u03c4\u03ac",
    "Seconds": "\u0394\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
    "Failed to save file": "\u0391\u03c0\u03bf\u03c4\u03c5\u03c7\u03af\u03b1 \u03b1\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7\u03c2 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5",
    "Read less ...": "\u0391\u03bd\u03ac\u03b3\u03bd\u03c9\u03c3\u03b7 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03c9\u03bd\u2026",
    "Year": "\u0388\u03c4\u03bf\u03c2",
    "Month": "\u039c\u03ae\u03bd\u03b1\u03c2",
    "Week": "\u0395\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1",
    "Day": "\u0397\u03bc\u03ad\u03c1\u03b1",
    "Hour": "\u038f\u03c1\u03b1",
    "Minute": "\u039b\u03b5\u03c0\u03c4\u03cc",
    "Second": "\u0394\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",
    "Remove": "\u039a\u03b1\u03c4\u03ac\u03c1\u03b3\u03b7\u03c3\u03b7",
    "Select file": "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5",
    "More options": "\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",
    "Set new image": "\u039f\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03bd\u03ad\u03b1\u03c2 \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2",
    "Hold the Ctrl key to launch in a new browser tab": "\u039a\u03c1\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03c0\u03b1\u03c4\u03b7\u03bc\u03ad\u03bd\u03bf \u03c4\u03bf \u03c0\u03bb\u03ae\u03ba\u03c4\u03c1\u03bf Ctrl \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b1\u03bd\u03bf\u03af\u03be\u03b5\u03b9 \u03bd\u03ad\u03b1 \u03ba\u03b1\u03c1\u03c4\u03ad\u03bb\u03b1 \u03c3\u03c4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ae\u03b3\u03b7\u03c3\u03b7\u03c2",
    "No files found": "\u0394\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b5 \u03ba\u03b1\u03bd\u03ad\u03bd\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf",
    "Add file": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5",
    "Refresh": "\u0391\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7",
    "All years": "\u038c\u03bb\u03b1 \u03c4\u03b1 \u03ad\u03c4\u03b7",
    "All months": "\u038c\u03bb\u03bf\u03b9 \u03bf\u03b9 \u03bc\u03ae\u03bd\u03b5\u03c2",
    "All": "\u038c\u03bb\u03bf\u03b9",
    "Open side navigation": "\u0386\u03bd\u03bf\u03b9\u03b3\u03bc\u03b1 \u03c0\u03bb\u03b5\u03c5\u03c1\u03b9\u03ba\u03ae\u03c2 \u03c0\u03bb\u03bf\u03ae\u03b3\u03b7\u03c3\u03b7\u03c2",
    "PDF template": "\u03a0\u03c1\u03cc\u03c4\u03c5\u03c0\u03bf PDF",
    "Margins": "\u03a0\u03b5\u03c1\u03b9\u03b8\u03ce\u03c1\u03b9\u03b1",
    "Top": "\u039a\u03bf\u03c1\u03c5\u03c6\u03ae",
    "Right": "\u0394\u03b5\u03be\u03b9\u03ac",
    "Bottom": "\u039a\u03ac\u03c4\u03c9",
    "Left": "\u0391\u03c1\u03b9\u03c3\u03c4\u03b5\u03c1\u03ac",
    "Layout": "\u0394\u03b9\u03ac\u03c4\u03b1\u03be\u03b7",
    "Page size": "\u039c\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2",
    "Measure unit": "\u039c\u03bf\u03bd\u03ac\u03b4\u03b1 \u03bc\u03ad\u03c4\u03c1\u03b7\u03c3\u03b7\u03c2",
    "Landscape": "\u03a4\u03bf\u03c0\u03af\u03bf",
    "Blocks": "\u0395\u03bd\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2",
    "Data": "\u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1",
    "Stationary PDF": "\u03a3\u03c4\u03b1\u03c4\u03b9\u03ba\u03cc PDF",
    "PDF templates": "\u03a0\u03c1\u03cc\u03c4\u03c5\u03c0\u03b1 PDF",
    "No PDF templates set": "\u039a\u03b1\u03bd\u03ad\u03bd\u03b1 \u03c3\u03cd\u03bd\u03bf\u03bb\u03bf \u03c0\u03c1\u03bf\u03c4\u03cd\u03c0\u03c9\u03bd PDF",
    "Add comment": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03c7\u03bf\u03bb\u03af\u03bf\u03c5",
    "Attach file": "\u0395\u03c0\u03b9\u03c3\u03cd\u03bd\u03b1\u03c8\u03b7 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5",
    "E-mail template": "\u03a0\u03c1\u03cc\u03c4\u03c5\u03c0\u03bf email",
    "Subject": "\u0398\u03ad\u03bc\u03b1",
    "E-mail templates": "\u03a0\u03c1\u03cc\u03c4\u03c5\u03c0\u03b1 email",
    "No e-mail templates set": "\u0394\u03b5\u03bd \u03ad\u03c7\u03bf\u03c5\u03bd \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03c0\u03c1\u03cc\u03c4\u03c5\u03c0\u03b1 email",
    "Preview": "\u03a0\u03c1\u03bf\u03b5\u03c0\u03b9\u03c3\u03ba\u03cc\u03c0\u03b7\u03c3\u03b7",
    "By default all blocks are drawn one by one, width is 100% and height is automatic. If you need an absolute position you can set the position and dimensions.": "\u0391\u03c0\u03cc \u03c0\u03c1\u03bf\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03cc\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03b5\u03bd\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2 \u03c3\u03c7\u03b5\u03b4\u03b9\u03ac\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bc\u03af\u03b1 \u03c0\u03c1\u03bf\u03c2 \u03bc\u03af\u03b1 \u03bc\u03b5 \u03c0\u03bb\u03ac\u03c4\u03bf\u03c2 \u03c3\u03c4\u03bf 100% \u03ba\u03b1\u03b9 \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03bf \u03cd\u03c8\u03bf\u03c2. \u0391\u03bd \u03c7\u03c1\u03b5\u03b9\u03ac\u03b6\u03b5\u03c3\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03b1\u03c0\u03cc\u03bb\u03c5\u03c4\u03b7 \u03b8\u03ad\u03c3\u03b7 \u03bc\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03bf\u03c1\u03af\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b7 \u03b8\u03ad\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03c4\u03b9\u03c2 \u03b4\u03b9\u03b1\u03c3\u03c4\u03ac\u03c3\u03b5\u03b9\u03c2.",
    "Positioning": "\u03a4\u03bf\u03c0\u03bf\u03b8\u03ad\u03c4\u03b7\u03c3\u03b7",
    "X": "X",
    "Y": "Y",
    "Dimensions": "\u0394\u03b9\u03b1\u03c3\u03c4\u03ac\u03c3\u03b5\u03b9\u03c2",
    "Width": "\u03a0\u03bb\u03ac\u03c4\u03bf\u03c2",
    "Add groups to share": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03bf\u03bc\u03ac\u03b4\u03c9\u03bd \u03b3\u03b9\u03b1 \u03ba\u03bf\u03b9\u03bd\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7",
    "Copy": "\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",
    "Add filter": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c6\u03af\u03bb\u03c4\u03c1\u03bf\u03c5",
    "Comparator": "\u03a4\u03b5\u03bb\u03b5\u03c3\u03c4\u03ae\u03c2 \u03c3\u03cd\u03b3\u03ba\u03c1\u03b9\u03c3\u03b7\u03c2",
    "Equals": "\u0399\u03c3\u03bf\u03cd\u03c4\u03b1\u03b9",
    "Doesn't equal": "\u0394\u03b5\u03bd \u03b9\u03c3\u03bf\u03cd\u03c4\u03b1\u03b9",
    "Greather than": "\u039c\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc",
    "Lower than": "\u039c\u03b9\u03ba\u03c1\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc",
    "By default all blocks are drawn one by one  width is 100% and height is automatic. If you need an absolute position you can set the position and dimensions.": "\u0391\u03c0\u03cc \u03c0\u03c1\u03bf\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03cc\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03b5\u03bd\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2 \u03c3\u03c7\u03b5\u03b4\u03b9\u03ac\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bc\u03af\u03b1 \u03c0\u03c1\u03bf\u03c2 \u03bc\u03af\u03b1 \u03bc\u03b5 \u03c0\u03bb\u03ac\u03c4\u03bf\u03c2 \u03c3\u03c4\u03bf 100% \u03ba\u03b1\u03b9 \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03bf \u03cd\u03c8\u03bf\u03c2. \u0391\u03bd \u03c7\u03c1\u03b5\u03b9\u03ac\u03b6\u03b5\u03c3\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03b1\u03c0\u03cc\u03bb\u03c5\u03c4\u03b7 \u03b8\u03ad\u03c3\u03b7 \u03bc\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03bf\u03c1\u03af\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b7 \u03b8\u03ad\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03c4\u03b9\u03c2 \u03b4\u03b9\u03b1\u03c3\u03c4\u03ac\u03c3\u03b5\u03b9\u03c2.",
    "Please enter your username and password": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5, \u03b5\u03b9\u03c3\u03b1\u03b3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03c4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7 \u03ba\u03b1\u03b9 \u03c4\u03bf\u03bd \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",
    "Forgot password?": "\u039e\u03b5\u03c7\u03ac\u03c3\u03b1\u03c4\u03b5 \u03c4\u03bf\u03bd \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2;",
    "Reset your password": "\u0395\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac \u03c4\u03bf\u03c5 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",
    "Please enter your registered e-mail address to receive a link to reset your password.": "\u0395\u03b9\u03c3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b5\u03b3\u03b3\u03b5\u03b3\u03c1\u03b1\u03bc\u03bc\u03ad\u03bd\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 email \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bb\u03ac\u03b2\u03b5\u03c4\u03b5 \u03ad\u03bd\u03b1\u03bd \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf \u03ba\u03b1\u03b9 \u03bd\u03b1 \u03b5\u03c0\u03b1\u03bd\u03b1\u03c6\u03ad\u03c1\u03b5\u03c4\u03b5 \u03c4\u03bf\u03bd \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2.",
    "Dear {{user.username}},\n\nWe received a request to reset your {title} password. To reset your password, click on the link below (or copy and paste the URL into your browser).\n\n{link}\n\nIf you didn't make this request yourself, ignore this e-mail and contact your administrator.": "\u0391\u03b3\u03b1\u03c0\u03b7\u03c4\u03ad \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7 {{user.username}},\n\n\u039b\u03ac\u03b2\u03b1\u03bc\u03b5 \u03b1\u03af\u03c4\u03b7\u03bc\u03b1 \u03b3\u03b9\u03b1 \u03b5\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac \u03c4\u03bf\u03c5 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03ae\u03c2 \u03c3\u03b1\u03c2 \u03c9\u03c2 {title}. \u0393\u03b9\u03b1 \u03b5\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac \u03c4\u03bf\u03c5 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2, \u03b5\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03bf\u03bd \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf (\u03ae \u03b1\u03bd\u03c4\u03b9\u03b3\u03c1\u03ac\u03c8\u03c4\u03b5 \u03ba\u03b1\u03b9 \u03b5\u03c0\u03b9\u03ba\u03bf\u03bb\u03bb\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf URL \u03c3\u03c4\u03bf \u03c0\u03c1\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ae\u03b3\u03b7\u03c3\u03b7\u03c2).\n\n{link}\n\n\u0391\u03bd \u03c4\u03bf \u03b1\u03af\u03c4\u03b7\u03bc\u03b1 \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b9\u03ba\u03cc \u03c3\u03b1\u03c2, \u03b1\u03b3\u03bd\u03bf\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf email \u03ba\u03b1\u03b9 \u03b5\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03ae\u03c3\u03c4\u03b5 \u03bc\u03b5 \u03c4\u03bf\u03bd \u03b4\u03b9\u03b1\u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03c4\u03ae \u03c4\u03bf\u03c5 \u03c3\u03c5\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2.",
    "The e-mail was sent to {email}.": "\u03a4\u03bf email \u03b5\u03c3\u03c4\u03ac\u03bb\u03b7 \u03c3\u03c4\u03bf {email}.",
    "An error occured": "\u03a0\u03c1\u03bf\u03ad\u03ba\u03c5\u03c8\u03b5 \u03c3\u03c6\u03ac\u03bb\u03bc\u03b1",
    "Please create a new password": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5, \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03c3\u03c4\u03b5 \u03bd\u03ad\u03bf \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",
    "Your password has been reset. Continue to the login screen.": "\u0388\u03b3\u03b9\u03bd\u03b5 \u03b5\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac \u03c4\u03bf\u03c5 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2. \u03a3\u03c5\u03bd\u03ad\u03c7\u03b5\u03b9\u03b1 \u03c3\u03b5 \u03bf\u03b8\u03cc\u03bd\u03b7 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2.",
    "Owner": "\u0399\u03b4\u03b9\u03bf\u03ba\u03c4\u03ae\u03c4\u03b7\u03c2",
    "Search phrase": "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03c6\u03c1\u03ac\u03c3\u03b7\u03c2",
    "Like": "Like"
}
				);
			}]);