using my.sports as ms from '../db/schema';

service MatchService {
  entity Grounds     as projection on ms.Grounds;
  entity Umpires     as projection on ms.Umpires;
  entity Teams       as projection on ms.Teams;
  entity MatchSetup  as projection on ms.MatchSetup;
}