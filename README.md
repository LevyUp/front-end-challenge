## Assumptions/Choices

For ease of development I assumed I only had to support modern and up to date browsers.

I went with a framework like Next.js mainly because it's quite easy for me to setup. This way I could spend less time on configuration and more time developing.
For a real world application I would need more context to determine if Next.js is something we would actually want to use.

An application of this size probably doesn't need typescript. I went with typescript because it's easy enough to setup and I find that it improves
the overall developer experience, at least for myself.

I assumed that talent paths would remain linear for the forseeable future. If I had reason think there was a reasonable chance of that changing I would probably approach
the assignment differently.

For the requirment that items must be selected in order I assumed that did not mean for the user to have to click each talent one at a time.
As such if the user has enough points they could for instance click 'cake' without already having the previous talents. In this case the previous talents
would also be 'invested' and the approriate number of points deducted.

I made a similar assumption for removing points. For instance a user could have 3 points invested in the first tree and right click the first talent to remove
all the points for that tree.

Additionally I also made it so that if a user left clicks a talent earlier in the tree it removes the talents ahead of it in the tree. I found
that if I wanted to reset my talents to a specific point in the tree, it was easier to left click the exact node I wanted then right click the node ahead
of it.

I used radio inputs for the talents to try and make the talent tree more accessible.

For mobile responsiveness I did not try to accommodate talent paths that could be longer than 4 at this time. If that were a likely scenario
I would need to adjust the design.

## Questions/Comments

I don't consider myself a UI/UX expert, so if possible I would appreciate it if I could receive some insight about some of the requirements.

I thought it was odd to use right click to deallocate points. I don't think it would be obvious to a user to do that. I think simply clicking on a talent again
to deallocate points would be more intuitive. I could be totally off the mark here. I would like to know the thinking behind this decision.
