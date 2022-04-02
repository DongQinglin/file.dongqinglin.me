from node
arg project="./"
arg port=80
run set -x ; echo ${port}-------
copy ${project} /home/node/project
workdir /home/node/project
expose ${port}
entrypoint ["npm", "run", "start:prod"]