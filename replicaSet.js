rs.initiate( {
   _id: "mongoReplSet",
   members: [
      { _id: 0, host: "mongo00:27017" },
      { _id: 1, host: "mongo01:27017" },
      { _id: 2, host: "mongo02:27017" }
   ]
} );

rs.status();