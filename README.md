## Getting Started

### Setup

```
npm install

npm run dev
```

The app will run at localhost:3000

### Testing

```
npm test
```

I would very much appreciate any feedback provided.

## Assumptions/Choices

### Technology

For ease of development I assumed I only had to support modern and up to date browsers.

I went with a framework like Next.js mainly because it's quite easy for me to setup. This way I could spend less time on configuration and more time developing.
For a real world application I would need more context to determine if Next.js is something we would actually want to use.

An application of this size probably doesn't need typescript. I went with typescript because for me the type system helps to avoid common pitfalls in vanilla javascript
and makes debugging easier.

I used css modules to scope css to components. I found this to be sufficient for this application and did not feel the need to opt into a specific methodology such
as Atomic CSS, BEM, SMACSS, etc.

### Functionality

I assumed that talent paths would remain linear for the forseeable future.

For the requirement that items must be selected in order I assumed that did not mean for the user to have to click each talent one at a time.
As such if the user has enough points they could for instance click 'cake' without already having the previous talents. In this case the previous talents
would also be 'invested' and the approriate number of points deducted.

I made a similar assumption for removing points. For instance a user could have 3 points invested in the first path and right click the first talent to remove
all the points for that path.

Additionally I also made it so that if a user left clicks a talent earlier in the path it removes the talents ahead of it in the path. I found
that if I wanted to reset my talents to a specific point in the path, it was easier to left click the exact node I wanted than right click the node ahead
of it.

I didn't think there was a good indicator when a user tries to spend more points than they have left so I added a simple animation to highlight
the points area when this happens.

I used radio inputs for the talents to try and make the calculator more accessible.

For mobile responsiveness I did not try to accommodate talent paths that could be longer than 4 at this time. If that were a likely scenario
I would need to adjust the design.

I made it so the calculator could be initialized with talents already selected. Along with this I simulated "fetching" for the calculator and loadouts.
For now it pulls mock data from json files located in "public/data". In a real app I would replace the file system functions with http calls. The route for
a loadout page is /loadouts/{id}. There are two example loadouts in the data directory.
For now I did not include any error handling or cases where a loadout may not be compatible with the current version of the calculator.

I did not include the ability to save a loadout.

## Comments

I think it would nice to have a name for each talent displayed somewhere in the design.

I think the mobile view I laid for very small sizes has room for improvement.
