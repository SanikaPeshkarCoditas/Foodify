export const RESTAURANTS = [
  {
   id: 1,
    resimg:"url",
    resname: "Krishnakakla",
    resdesc: "Lorem nksnkdnkdndk dkkkkkkkkkkkkkkkaaaaaaaaaaaalss",

    feedback: [
      {
        userid: 1,
        username:"sjkls",
        rating: 3,
        feedbackeach: "good",
      },
      {
        userid: 2,
        rating: 3,
        feedbackeach: "good",
      },
      {
        userid: 3,
        rating: 3,
        feedbackeach: "good",
      },
    ],
  },
  {
    resid: 2,
    resimg:"url",
    resname: "Krishnakakla",
    resdesc: "Lorem nksnkdnkdndk dkkkkkkkkkkkkkkkaaaaaaaaaaaalss",

    feedback: [
      {
        userid: 1,
        username:"sjkls",
        rating: 3,
        feedbackeach: "good",
      },
      {
        userid: 2,
        rating: 3,
        feedbackeach: "good",
      },
      {
        userid: 3,
        rating: 3,
        feedbackeach: "good",
      },
    ],
  },  {
    resid: 3,
    resimg:"url",
    resname: "Krishnakakla",
    resdesc: "Lorem nksnkdnkdndk dkkkkkkkkkkkkkkkaaaaaaaaaaaalss",

    feedback: [
      {
        userid: 1,
        username:"sjkls",
        rating: 3,
        feedbackeach: "good",
      },
      {
        userid: 2,
        rating: 3,
        feedbackeach: "good",
      },
      {
        userid: 3,
        rating: 3,
        feedbackeach: "good",
      },
    ],
  },  {
    resid: 1,
    resimg:"url",
    resname: "Krishnakakla",
    resdesc: "Lorem nksnkdnkdndk dkkkkkkkkkkkkkkkaaaaaaaaaaaalss",

    feedback: [
      {
        userid: 1,
        username:"sjkls",
        rating: 3,
        feedbackeach: "good",
      },
      {
        userid: 2,
        rating: 3,
        feedbackeach: "good",
      },
      {
        userid: 3,
        rating: 3,
        feedbackeach: "good",
      },
    ],
  },
];


export interface Resfeedback{
    id:number;
    rating:number,
    resname:string
    feedback?:string;
    
}
export interface Users{
    userid:number,
    username:string,
    address:string,
    userimg:string

    feedback?:Resfeedback[]
}
const USERS:Users[]=[
    {
        userid:1,
        username:'arpita',
        address:'pune',
        userimg:'url',

        feedback:[
            {
                id:1,
                resname:'something',
                rating:3,
                feedback:"somehnfifn"
            },
            {
               id:2,
                resname:'something',
                rating:3,
                feedback:"somehnfifn"
            },
            {
               id:3,
                resname:'something',
                rating:3,
                feedback:"somehnfifn"
            },

        ]
    }
]
