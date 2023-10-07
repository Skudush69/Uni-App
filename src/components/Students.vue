<template>
  <div id="students"> 
      <v-container>
          <v-container>
              <v-layout column>
                  <v-card class="mx-auto">

                      <v-toolbar color="#005AB2" theme="dark">
                          <v-toolbar-title class="text-h6">
                              Students
                          </v-toolbar-title>
                      </v-toolbar>
                      <v-container>
                        <v-table>
    <thead>
      <tr>
        <th class="text-left">FirstName</th>
          <th class="text-left">LastName</th>
        <th class="text-left">Gender</th>
        <th class="text-left">Email</th>
        <th class="text-left">Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.firstname }}</td>
        <td>{{ student.lastname }}</td>
        <td>{{ student.gender }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.phone }}</td>
      </tr>
    </tbody>
  </v-table>
                      </v-container>

                      <v-divider></v-divider>
      
                  </v-card>
              </v-layout>
          </v-container>
      </v-container>
  </div>
</template>

<script>
  export default{
      data(){
         return{
          students: [
            {firstname: 'Joe',
            lastname: 'Mama',
            gender: 'male',
            email: 'joemama@gmail.com',
            phone: '254769579135'
            },
            {firstname: 'Ryan',
            lastname: 'Reynolds',
            gender: 'male',
            email: 'ryanolds@gmail.com',
            phone: '254722562345'
            },
            {firstname: 'Roronoa',
            lastname: 'Zoro',
            gender: 'male',
            email: 'rozoro@gmail.com',
            phone: '254748579135'
            },
            {firstname: 'Nico',
            lastname: 'Robin',
            gender: 'female',
            email: 'nicobin@gmail.com',
            phone: '254769359135'
            },
          ]
         }
      }
     }
</script>
