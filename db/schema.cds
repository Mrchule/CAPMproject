namespace my.sports;

entity Grounds {
  key ID       : Integer;
      Name     : String;
      Location : String;
      GroundType : String;
}

entity Umpires {
  key ID              : Integer;
      name            : String;
      Experience_Years: Integer;
}

entity Teams {
  key ID   : Integer;
      Name : String;
      Team : String;
}

entity MatchSetup {
  key ID         : Integer;
      Match_date : Date;
      ground      : Association to Grounds;
      team1       : Association to Teams;
      team2       : Association to Teams;
      umpire      : Association to Umpires;
}