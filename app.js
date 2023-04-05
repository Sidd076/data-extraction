const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/data', (req, res) => {
  fs.readFile('./data.json', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});

app.post('/data', (req, res) => {
    const newEntry = {
      "id": 2,
      "name": "The Snow Adventurer",
      "duration": 4,
      "maxGroupSize": 10,
      "difficulty": "difficult",
      "ratingsAverage": 4.5,
      "ratingsQuantity": 13,
      "price": 997,
      "summary": "Exciting adventure in the snow with snowboarding and skiing",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
      "imageCover": "tour-3-cover.jpg",
      "images": ["tour-3-1.jpg", "tour-3-2.jpg", "tour-3-3.jpg"],
      "startDates": ["2022-01-05,10:00", "2022-02-12,10:00", "2023-01-06,10:00"]
    };
    fs.readFile('./data.json', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      const jsonData = JSON.parse(data);
      jsonData.push(newEntry);
      fs.writeFile('./data.json', JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
        }
        res.send('Data added successfully!');
      });
    });
  });
  
  
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
