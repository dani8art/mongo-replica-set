FROM library/mongo

ADD replicaSet.js /

CMD mongod --replSet mongoReplSet
