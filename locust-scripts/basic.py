from locust import HttpLocust, TaskSet, task

data = []
class UserTasks(TaskSet):

   
        

    @task
    def stats(self):
        self.client.post("/tyapes/config", json=data)


class WebsiteUser(HttpLocust):
    task_set = UserTasks
