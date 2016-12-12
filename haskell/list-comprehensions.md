#List Comprehensions

## Filter Heterogeneous Lists

Declare multiple types that we want in a list:

```Haskell
data Student = Student {
  sName :: String
, sAge  :: Int
, sAttendingClasses :: [String]
} deriving (Show)

data Professor = Professor {
  pName :: String
, pAge  :: Int
, pTeachingClasses :: [String]
} deriving (Show)
```

Declare a sum type to hold the items in the same type:

```Haskell
data Person = PersonStudent Student | PersonProfessor Professor
```

Declare list comprehensions to retrieve individual types from a heterogeneous  without the sum constructor:

```Haskell
getStudents   :: [Person] -> [Student]
getStudents   xs   = [x | (PersonStudent x) <- xs]

getProfessors :: [Person] -> [Professor]
getProfessors xs = [x | (PersonProfessor x) <- xs]

let susana = Student "Susana" 19 ["Organic Chemistry", "Abstract Algebra"]
    jean   = Student "Jean" 18 ["Biology", "Chemistry"]
    luc    = Professor "Luc" 50 ["Chemistry", "Organic Chemistry"]
    people = [PersonStudent susana, PersonStudent jean, PersonProfessor luc]

λ> getStudents people
[Student {sName = "Susana", sAge = 19, sAttendingClasses = ["Organic Chemistry","Abstract Algebra"]},Student {sName = "Jean", sAge = 18, sAttendingClasses = ["Biology","Chemistry"]}]

λ> getProfessors people
[Professor {pName = "Luc", pAge = 50, pTeachingClasses = ["Chemistry","Organic Chemistry"]}]
```