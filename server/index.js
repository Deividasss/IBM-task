
import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs/promises'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/forma.html')
})

app.get('/client-submit', async (req, res) => {
    if(parseInt( Object.keys(req.query).length ) > 0) {

      let json = []

      try {
          const data = await fs.readFile('./database.json', 'utf8')

          let parsedJson = JSON.parse(data)

          parsedJson.push(req.query)

          json = parsedJson
      
      } catch {
          json.push(req.query)

          console.log('Duomenu bazes failas sukurtas')
      }
      
      await fs.writeFile('./database.json', JSON.stringify(json))

      res.send('Duomenys sėkmingai priimti')
    } else {
      res.send('Nėra gauta jokių duomenų')
    }
})

app.get('/clients', async (req, res) => {
  const data = await fs.readFile('./database.json', 'utf8')

  let masyvas = JSON.parse(data)
  let html = `<table>
              <thead>
                <th>Vardas</th>
                <th>Pavardė</th>
                <th>Adresas</th>
                <th>Telefonas</th>
                <th>El. paštas</th>
              </thead> 
              <tbody>           
              `
  
    masyvas.forEach(value => {
      html +=  `<tr>
                  <td>${value.vardas}</td>
                  <td>${value.pavarde}</td>
                  <td>${value.adresas}</td>
                  <td>${value.telefonas}</td>
                  <td>${value.elpastas}</td>
                </tr>`
    })

  html += '</tbody></table>'

  res.send(html)
})

app.listen(3001)