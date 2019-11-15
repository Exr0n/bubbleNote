
# Bubble Note

## A reddit based reminder and reflection system

This application is designed to be used to reflect on learning by creating notes and "upvoting" them to sort by importance.

I really don't wanna work on this right now so here is the plan:  

1. Create the `Note` class, which stores all the neccessary data: value (the text content of the note itself), time created, upvotes: array of `Vote` class which stores all the votes that this note got, and children: dict of all the subnotes
1. Create the `Vote` class which stores the time created and implements getValue which returns the value of the vote: `1/(log(time_since_epoch))*constant_epoch_bias` or something
1. Set `constant_epoch_bias` to something that balances out the fact that the epoch was like twenty years ago, maybe change the epoch for this system to something more recent?
1. Create some GUI or CLI that shows all notes and their subnote trees sorted by calculated weight, which is `sum_of_vote_weights*1/(log(time_since_epoch))` or something

This should all go into creating a system where recent notes and important (highly upvoted ones) stay at the top of the sorted list and older ones sink to the bottom (eventually), even if they were very important in the past.  

If anybody wants to steal this idea, go ahead but please credit me if you make something cool :p
