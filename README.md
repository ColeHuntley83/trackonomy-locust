Recently we were supposed to conduct a load/stress testing session. 

There were already some python scripts in place and the team that produced them suggested using locust.io for this purpose.

The tool was new to me. At the first glance, as far as the feature list is concerned, Locust seems inferior to other software we used before, like Gatling or even JMeter (the latter is turning 20 soon, but it doesn't make it an invalid testing tool!). 
It looks like Locust generates load and that's pretty much it. With the exception of the single feature that 
I think is its strongest selling point: the ability to distribute the load (single master, multiple slaves) out of the box.

The authors also claim that it's very easy to use and to extend Locust. So, instead of discarding it (using Locust),
I decided to give it a quick try and try to address potential needs/problems with a series of quick experiments.

Some of the things I would like to confirm are:
* Running [on Kubernetes](kubernetes/) (but first [in the docker](docker-image/))
* [Extending Web UI](extend-web-ui/)
* [Testing non-REST apps](enriching-results/)
* Dealing with long-running requests
* Capturing atomic results (now Locust saves pre-aggregated results) - part of [Testing non-REST apps](enriching-results/)
* Enriching test result data (tags, etc.) - part of [Testing non-REST apps](enriching-results/)
* [Sending messages to Apache Kafka](kafka-client/)
* [Distributing test data to be used by the slaves](./feeding-locusts)
* [Sending test results to an external database](./sending-results)

This repo holds results of particular experiments.

Much of the staff included here is described here: https://medium.com/locust-io-experiments. 




Cole Working Script:
```docker run --rm --name standalone --hostname standalone -e ATTACKED_HOST=https://trk-uniwp-prd-internal.azure-api.net/internal -p 8089:8089  -v /Users/colehuntley/Coding/trackonomy/locust-experiments/feeding-locusts/locust-scripts:/locust  grubykarol/locust:0.8.1-py3.6```