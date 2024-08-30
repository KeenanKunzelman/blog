---
title: 'Mason'
pubDate: 2024-08-29
description: 'So my buddy asked if I knew how to arrange rectangles randomly and I thought it would be easy. That was dumb.'
author: 'Keenan Kunzelman'
image:
    url: '/images/grid.png'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["astro", "blogging", "learning in public"]
---
# The Challenge
When laying pavers, [like these](http://www.cambridgepavers.com/dfiles/cpdshb2012/cpdshp2012_11_15.pdf) you must follow a couple rules and do your best to create a random layout. These rules are as follows.
1. Pavers must not have 4 corners meet at the same point
2. There shall be no linear seem that spans longer than 4 units
3. Cuts should be minimized

Now this is obviously something you can achieve without a clear step by step blueprint, but it would be cool to have one. So I began thinking about this problem as a computer science one. Now I have no clue what the most efficient way to do this is, and I'm not even quite sure what rules I will have to follow to build out a solution in code, but none the less i'm going to try my best and see how far I can get. 

## Day 1
So today was a boilerplate day. I predominantly spent my time setting up a python environment, thinking about the problem, and creating a **tkinter** screen with a grid.

![grid](/images/grid.png) 

Next I created the ability to draw random sizes that mimic the types of paver stones you get.

![stones](/images/stones.png) 

> Here is the highly questionable code i've written to get this far. I'm sure a lot will change as I progress
```python
import tkinter as tk
import random


class GridApplication(tk.Tk):
    def __init__(self, grid_size, cell_size):
        super().__init__()
        self.grid_size = grid_size
        self.cell_size = cell_size
        self.canvas = tk.Canvas(self, width=grid_size*cell_size, height=grid_size*cell_size)
        self.canvas.pack()
        self.draw_grid()
        self.canvas.bind("<Button-1>", self.on_click)
        self.configure(background='black')

    def draw_grid(self):
        for i in range(self.grid_size):
            for j in range(self.grid_size):
                x0 = i * self.cell_size
                y0 = j * self.cell_size
                x1 = x0 + self.cell_size
                y1 = y0 + self.cell_size
                self.canvas.create_rectangle(x0, y0, x1, y1, outline="black")

    def on_click(self, event):
        x = (event.x // self.cell_size) * self.cell_size
        y = (event.y // self.cell_size) * self.cell_size



        xx = random.randrange(1,4)

        yy = random.randrange(1,4)

        while xx == yy:
            xx = random.randrange(1,4)

            yy = random.randrange(1,4)

        while xx == 1 and yy > 2 or yy == 1 and xx > 2:
            xx = random.randrange(1,4)

            yy = random.randrange(1,4)

        while xx == 1 and yy == 1:
            xx = random.randrange(1,4)

            yy = random.randrange(1,4)


        self.canvas.create_rectangle(x, y, x + xx*self.cell_size, y + yy*self.cell_size, fill="blue", outline="black")

if __name__ == "__main__":
    grid_size = 10  # Adjust grid size as needed
    cell_size = 80  # Adjust cell size as needed
    app = GridApplication(grid_size, cell_size)
    app.mainloop()


```




