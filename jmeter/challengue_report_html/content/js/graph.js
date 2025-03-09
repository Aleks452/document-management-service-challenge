/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1542.0, "minX": 0.0, "maxY": 11343.0, "series": [{"data": [[0.0, 1542.0], [0.1, 1542.0], [0.2, 1542.0], [0.3, 1542.0], [0.4, 1542.0], [0.5, 1542.0], [0.6, 1542.0], [0.7, 1542.0], [0.8, 1542.0], [0.9, 1542.0], [1.0, 1542.0], [1.1, 1542.0], [1.2, 1542.0], [1.3, 1542.0], [1.4, 1773.0], [1.5, 1773.0], [1.6, 1773.0], [1.7, 1773.0], [1.8, 1773.0], [1.9, 1773.0], [2.0, 1773.0], [2.1, 1773.0], [2.2, 1773.0], [2.3, 1773.0], [2.4, 1773.0], [2.5, 1773.0], [2.6, 1773.0], [2.7, 2269.0], [2.8, 2269.0], [2.9, 2269.0], [3.0, 2269.0], [3.1, 2269.0], [3.2, 2269.0], [3.3, 2269.0], [3.4, 2269.0], [3.5, 2269.0], [3.6, 2269.0], [3.7, 2269.0], [3.8, 2269.0], [3.9, 2269.0], [4.0, 2436.0], [4.1, 2436.0], [4.2, 2436.0], [4.3, 2436.0], [4.4, 2436.0], [4.5, 2436.0], [4.6, 2436.0], [4.7, 2436.0], [4.8, 2436.0], [4.9, 2436.0], [5.0, 2436.0], [5.1, 2436.0], [5.2, 2436.0], [5.3, 2436.0], [5.4, 2817.0], [5.5, 2817.0], [5.6, 2817.0], [5.7, 2817.0], [5.8, 2817.0], [5.9, 2817.0], [6.0, 2817.0], [6.1, 2817.0], [6.2, 2817.0], [6.3, 2817.0], [6.4, 2817.0], [6.5, 2817.0], [6.6, 2817.0], [6.7, 2895.0], [6.8, 2895.0], [6.9, 2895.0], [7.0, 2895.0], [7.1, 2895.0], [7.2, 2895.0], [7.3, 2895.0], [7.4, 2895.0], [7.5, 2895.0], [7.6, 2895.0], [7.7, 2895.0], [7.8, 2895.0], [7.9, 2895.0], [8.0, 2944.0], [8.1, 2944.0], [8.2, 2944.0], [8.3, 2944.0], [8.4, 2944.0], [8.5, 2944.0], [8.6, 2944.0], [8.7, 2944.0], [8.8, 2944.0], [8.9, 2944.0], [9.0, 2944.0], [9.1, 2944.0], [9.2, 2944.0], [9.3, 2944.0], [9.4, 3578.0], [9.5, 3578.0], [9.6, 3578.0], [9.7, 3578.0], [9.8, 3578.0], [9.9, 3578.0], [10.0, 3578.0], [10.1, 3578.0], [10.2, 3578.0], [10.3, 3578.0], [10.4, 3578.0], [10.5, 3578.0], [10.6, 3578.0], [10.7, 4568.0], [10.8, 4568.0], [10.9, 4568.0], [11.0, 4568.0], [11.1, 4568.0], [11.2, 4568.0], [11.3, 4568.0], [11.4, 4568.0], [11.5, 4568.0], [11.6, 4568.0], [11.7, 4568.0], [11.8, 4568.0], [11.9, 4568.0], [12.0, 4783.0], [12.1, 4783.0], [12.2, 4783.0], [12.3, 4783.0], [12.4, 4783.0], [12.5, 4783.0], [12.6, 4783.0], [12.7, 4783.0], [12.8, 4783.0], [12.9, 4783.0], [13.0, 4783.0], [13.1, 4783.0], [13.2, 4783.0], [13.3, 4783.0], [13.4, 4900.0], [13.5, 4900.0], [13.6, 4900.0], [13.7, 4900.0], [13.8, 4900.0], [13.9, 4900.0], [14.0, 4900.0], [14.1, 4900.0], [14.2, 4900.0], [14.3, 4900.0], [14.4, 4900.0], [14.5, 4900.0], [14.6, 4900.0], [14.7, 5055.0], [14.8, 5055.0], [14.9, 5055.0], [15.0, 5055.0], [15.1, 5055.0], [15.2, 5055.0], [15.3, 5055.0], [15.4, 5055.0], [15.5, 5055.0], [15.6, 5055.0], [15.7, 5055.0], [15.8, 5055.0], [15.9, 5055.0], [16.0, 5207.0], [16.1, 5207.0], [16.2, 5207.0], [16.3, 5207.0], [16.4, 5207.0], [16.5, 5207.0], [16.6, 5207.0], [16.7, 5207.0], [16.8, 5207.0], [16.9, 5207.0], [17.0, 5207.0], [17.1, 5207.0], [17.2, 5207.0], [17.3, 5207.0], [17.4, 5734.0], [17.5, 5734.0], [17.6, 5734.0], [17.7, 5734.0], [17.8, 5734.0], [17.9, 5734.0], [18.0, 5734.0], [18.1, 5734.0], [18.2, 5734.0], [18.3, 5734.0], [18.4, 5734.0], [18.5, 5734.0], [18.6, 5734.0], [18.7, 5757.0], [18.8, 5757.0], [18.9, 5757.0], [19.0, 5757.0], [19.1, 5757.0], [19.2, 5757.0], [19.3, 5757.0], [19.4, 5757.0], [19.5, 5757.0], [19.6, 5757.0], [19.7, 5757.0], [19.8, 5757.0], [19.9, 5757.0], [20.0, 5853.0], [20.1, 5853.0], [20.2, 5853.0], [20.3, 5853.0], [20.4, 5853.0], [20.5, 5853.0], [20.6, 5853.0], [20.7, 5853.0], [20.8, 5853.0], [20.9, 5853.0], [21.0, 5853.0], [21.1, 5853.0], [21.2, 5853.0], [21.3, 5853.0], [21.4, 6017.0], [21.5, 6017.0], [21.6, 6017.0], [21.7, 6017.0], [21.8, 6017.0], [21.9, 6017.0], [22.0, 6017.0], [22.1, 6017.0], [22.2, 6017.0], [22.3, 6017.0], [22.4, 6017.0], [22.5, 6017.0], [22.6, 6017.0], [22.7, 6031.0], [22.8, 6031.0], [22.9, 6031.0], [23.0, 6031.0], [23.1, 6031.0], [23.2, 6031.0], [23.3, 6031.0], [23.4, 6031.0], [23.5, 6031.0], [23.6, 6031.0], [23.7, 6031.0], [23.8, 6031.0], [23.9, 6031.0], [24.0, 6117.0], [24.1, 6117.0], [24.2, 6117.0], [24.3, 6117.0], [24.4, 6117.0], [24.5, 6117.0], [24.6, 6117.0], [24.7, 6117.0], [24.8, 6117.0], [24.9, 6117.0], [25.0, 6117.0], [25.1, 6117.0], [25.2, 6117.0], [25.3, 6117.0], [25.4, 6192.0], [25.5, 6192.0], [25.6, 6192.0], [25.7, 6192.0], [25.8, 6192.0], [25.9, 6192.0], [26.0, 6192.0], [26.1, 6192.0], [26.2, 6192.0], [26.3, 6192.0], [26.4, 6192.0], [26.5, 6192.0], [26.6, 6192.0], [26.7, 6275.0], [26.8, 6275.0], [26.9, 6275.0], [27.0, 6275.0], [27.1, 6275.0], [27.2, 6275.0], [27.3, 6275.0], [27.4, 6275.0], [27.5, 6275.0], [27.6, 6275.0], [27.7, 6275.0], [27.8, 6275.0], [27.9, 6275.0], [28.0, 6278.0], [28.1, 6278.0], [28.2, 6278.0], [28.3, 6278.0], [28.4, 6278.0], [28.5, 6278.0], [28.6, 6278.0], [28.7, 6278.0], [28.8, 6278.0], [28.9, 6278.0], [29.0, 6278.0], [29.1, 6278.0], [29.2, 6278.0], [29.3, 6278.0], [29.4, 6316.0], [29.5, 6316.0], [29.6, 6316.0], [29.7, 6316.0], [29.8, 6316.0], [29.9, 6316.0], [30.0, 6316.0], [30.1, 6316.0], [30.2, 6316.0], [30.3, 6316.0], [30.4, 6316.0], [30.5, 6316.0], [30.6, 6316.0], [30.7, 6365.0], [30.8, 6365.0], [30.9, 6365.0], [31.0, 6365.0], [31.1, 6365.0], [31.2, 6365.0], [31.3, 6365.0], [31.4, 6365.0], [31.5, 6365.0], [31.6, 6365.0], [31.7, 6365.0], [31.8, 6365.0], [31.9, 6365.0], [32.0, 6556.0], [32.1, 6556.0], [32.2, 6556.0], [32.3, 6556.0], [32.4, 6556.0], [32.5, 6556.0], [32.6, 6556.0], [32.7, 6556.0], [32.8, 6556.0], [32.9, 6556.0], [33.0, 6556.0], [33.1, 6556.0], [33.2, 6556.0], [33.3, 6556.0], [33.4, 6859.0], [33.5, 6859.0], [33.6, 6859.0], [33.7, 6859.0], [33.8, 6859.0], [33.9, 6859.0], [34.0, 6859.0], [34.1, 6859.0], [34.2, 6859.0], [34.3, 6859.0], [34.4, 6859.0], [34.5, 6859.0], [34.6, 6859.0], [34.7, 7244.0], [34.8, 7244.0], [34.9, 7244.0], [35.0, 7244.0], [35.1, 7244.0], [35.2, 7244.0], [35.3, 7244.0], [35.4, 7244.0], [35.5, 7244.0], [35.6, 7244.0], [35.7, 7244.0], [35.8, 7244.0], [35.9, 7244.0], [36.0, 7783.0], [36.1, 7783.0], [36.2, 7783.0], [36.3, 7783.0], [36.4, 7783.0], [36.5, 7783.0], [36.6, 7783.0], [36.7, 7783.0], [36.8, 7783.0], [36.9, 7783.0], [37.0, 7783.0], [37.1, 7783.0], [37.2, 7783.0], [37.3, 7783.0], [37.4, 7851.0], [37.5, 7851.0], [37.6, 7851.0], [37.7, 7851.0], [37.8, 7851.0], [37.9, 7851.0], [38.0, 7851.0], [38.1, 7851.0], [38.2, 7851.0], [38.3, 7851.0], [38.4, 7851.0], [38.5, 7851.0], [38.6, 7851.0], [38.7, 7926.0], [38.8, 7926.0], [38.9, 7926.0], [39.0, 7926.0], [39.1, 7926.0], [39.2, 7926.0], [39.3, 7926.0], [39.4, 7926.0], [39.5, 7926.0], [39.6, 7926.0], [39.7, 7926.0], [39.8, 7926.0], [39.9, 7926.0], [40.0, 8011.0], [40.1, 8011.0], [40.2, 8011.0], [40.3, 8011.0], [40.4, 8011.0], [40.5, 8011.0], [40.6, 8011.0], [40.7, 8011.0], [40.8, 8011.0], [40.9, 8011.0], [41.0, 8011.0], [41.1, 8011.0], [41.2, 8011.0], [41.3, 8011.0], [41.4, 8193.0], [41.5, 8193.0], [41.6, 8193.0], [41.7, 8193.0], [41.8, 8193.0], [41.9, 8193.0], [42.0, 8193.0], [42.1, 8193.0], [42.2, 8193.0], [42.3, 8193.0], [42.4, 8193.0], [42.5, 8193.0], [42.6, 8193.0], [42.7, 8274.0], [42.8, 8274.0], [42.9, 8274.0], [43.0, 8274.0], [43.1, 8274.0], [43.2, 8274.0], [43.3, 8274.0], [43.4, 8274.0], [43.5, 8274.0], [43.6, 8274.0], [43.7, 8274.0], [43.8, 8274.0], [43.9, 8274.0], [44.0, 8274.0], [44.1, 8423.0], [44.2, 8423.0], [44.3, 8423.0], [44.4, 8423.0], [44.5, 8423.0], [44.6, 8423.0], [44.7, 8423.0], [44.8, 8423.0], [44.9, 8423.0], [45.0, 8423.0], [45.1, 8423.0], [45.2, 8423.0], [45.3, 8423.0], [45.4, 8495.0], [45.5, 8495.0], [45.6, 8495.0], [45.7, 8495.0], [45.8, 8495.0], [45.9, 8495.0], [46.0, 8495.0], [46.1, 8495.0], [46.2, 8495.0], [46.3, 8495.0], [46.4, 8495.0], [46.5, 8495.0], [46.6, 8495.0], [46.7, 8518.0], [46.8, 8518.0], [46.9, 8518.0], [47.0, 8518.0], [47.1, 8518.0], [47.2, 8518.0], [47.3, 8518.0], [47.4, 8518.0], [47.5, 8518.0], [47.6, 8518.0], [47.7, 8518.0], [47.8, 8518.0], [47.9, 8518.0], [48.0, 8518.0], [48.1, 8562.0], [48.2, 8562.0], [48.3, 8562.0], [48.4, 8562.0], [48.5, 8562.0], [48.6, 8562.0], [48.7, 8562.0], [48.8, 8562.0], [48.9, 8562.0], [49.0, 8562.0], [49.1, 8562.0], [49.2, 8562.0], [49.3, 8562.0], [49.4, 8580.0], [49.5, 8580.0], [49.6, 8580.0], [49.7, 8580.0], [49.8, 8580.0], [49.9, 8580.0], [50.0, 8580.0], [50.1, 8580.0], [50.2, 8580.0], [50.3, 8580.0], [50.4, 8580.0], [50.5, 8580.0], [50.6, 8580.0], [50.7, 8589.0], [50.8, 8589.0], [50.9, 8589.0], [51.0, 8589.0], [51.1, 8589.0], [51.2, 8589.0], [51.3, 8589.0], [51.4, 8589.0], [51.5, 8589.0], [51.6, 8589.0], [51.7, 8589.0], [51.8, 8589.0], [51.9, 8589.0], [52.0, 8589.0], [52.1, 8757.0], [52.2, 8757.0], [52.3, 8757.0], [52.4, 8757.0], [52.5, 8757.0], [52.6, 8757.0], [52.7, 8757.0], [52.8, 8757.0], [52.9, 8757.0], [53.0, 8757.0], [53.1, 8757.0], [53.2, 8757.0], [53.3, 8757.0], [53.4, 8865.0], [53.5, 8865.0], [53.6, 8865.0], [53.7, 8865.0], [53.8, 8865.0], [53.9, 8865.0], [54.0, 8865.0], [54.1, 8865.0], [54.2, 8865.0], [54.3, 8865.0], [54.4, 8865.0], [54.5, 8865.0], [54.6, 8865.0], [54.7, 9038.0], [54.8, 9038.0], [54.9, 9038.0], [55.0, 9038.0], [55.1, 9038.0], [55.2, 9038.0], [55.3, 9038.0], [55.4, 9038.0], [55.5, 9038.0], [55.6, 9038.0], [55.7, 9038.0], [55.8, 9038.0], [55.9, 9038.0], [56.0, 9038.0], [56.1, 9202.0], [56.2, 9202.0], [56.3, 9202.0], [56.4, 9202.0], [56.5, 9202.0], [56.6, 9202.0], [56.7, 9202.0], [56.8, 9202.0], [56.9, 9202.0], [57.0, 9202.0], [57.1, 9202.0], [57.2, 9202.0], [57.3, 9202.0], [57.4, 9223.0], [57.5, 9223.0], [57.6, 9223.0], [57.7, 9223.0], [57.8, 9223.0], [57.9, 9223.0], [58.0, 9223.0], [58.1, 9223.0], [58.2, 9223.0], [58.3, 9223.0], [58.4, 9223.0], [58.5, 9223.0], [58.6, 9223.0], [58.7, 9260.0], [58.8, 9260.0], [58.9, 9260.0], [59.0, 9260.0], [59.1, 9260.0], [59.2, 9260.0], [59.3, 9260.0], [59.4, 9260.0], [59.5, 9260.0], [59.6, 9260.0], [59.7, 9260.0], [59.8, 9260.0], [59.9, 9260.0], [60.0, 9260.0], [60.1, 9416.0], [60.2, 9416.0], [60.3, 9416.0], [60.4, 9416.0], [60.5, 9416.0], [60.6, 9416.0], [60.7, 9416.0], [60.8, 9416.0], [60.9, 9416.0], [61.0, 9416.0], [61.1, 9416.0], [61.2, 9416.0], [61.3, 9416.0], [61.4, 9419.0], [61.5, 9419.0], [61.6, 9419.0], [61.7, 9419.0], [61.8, 9419.0], [61.9, 9419.0], [62.0, 9419.0], [62.1, 9419.0], [62.2, 9419.0], [62.3, 9419.0], [62.4, 9419.0], [62.5, 9419.0], [62.6, 9419.0], [62.7, 9469.0], [62.8, 9469.0], [62.9, 9469.0], [63.0, 9469.0], [63.1, 9469.0], [63.2, 9469.0], [63.3, 9469.0], [63.4, 9469.0], [63.5, 9469.0], [63.6, 9469.0], [63.7, 9469.0], [63.8, 9469.0], [63.9, 9469.0], [64.0, 9469.0], [64.1, 9616.0], [64.2, 9616.0], [64.3, 9616.0], [64.4, 9616.0], [64.5, 9616.0], [64.6, 9616.0], [64.7, 9616.0], [64.8, 9616.0], [64.9, 9616.0], [65.0, 9616.0], [65.1, 9616.0], [65.2, 9616.0], [65.3, 9616.0], [65.4, 9642.0], [65.5, 9642.0], [65.6, 9642.0], [65.7, 9642.0], [65.8, 9642.0], [65.9, 9642.0], [66.0, 9642.0], [66.1, 9642.0], [66.2, 9642.0], [66.3, 9642.0], [66.4, 9642.0], [66.5, 9642.0], [66.6, 9642.0], [66.7, 9655.0], [66.8, 9655.0], [66.9, 9655.0], [67.0, 9655.0], [67.1, 9655.0], [67.2, 9655.0], [67.3, 9655.0], [67.4, 9655.0], [67.5, 9655.0], [67.6, 9655.0], [67.7, 9655.0], [67.8, 9655.0], [67.9, 9655.0], [68.0, 9655.0], [68.1, 9709.0], [68.2, 9709.0], [68.3, 9709.0], [68.4, 9709.0], [68.5, 9709.0], [68.6, 9709.0], [68.7, 9709.0], [68.8, 9709.0], [68.9, 9709.0], [69.0, 9709.0], [69.1, 9709.0], [69.2, 9709.0], [69.3, 9709.0], [69.4, 9732.0], [69.5, 9732.0], [69.6, 9732.0], [69.7, 9732.0], [69.8, 9732.0], [69.9, 9732.0], [70.0, 9732.0], [70.1, 9732.0], [70.2, 9732.0], [70.3, 9732.0], [70.4, 9732.0], [70.5, 9732.0], [70.6, 9732.0], [70.7, 9737.0], [70.8, 9737.0], [70.9, 9737.0], [71.0, 9737.0], [71.1, 9737.0], [71.2, 9737.0], [71.3, 9737.0], [71.4, 9737.0], [71.5, 9737.0], [71.6, 9737.0], [71.7, 9737.0], [71.8, 9737.0], [71.9, 9737.0], [72.0, 9737.0], [72.1, 9750.0], [72.2, 9750.0], [72.3, 9750.0], [72.4, 9750.0], [72.5, 9750.0], [72.6, 9750.0], [72.7, 9750.0], [72.8, 9750.0], [72.9, 9750.0], [73.0, 9750.0], [73.1, 9750.0], [73.2, 9750.0], [73.3, 9750.0], [73.4, 9844.0], [73.5, 9844.0], [73.6, 9844.0], [73.7, 9844.0], [73.8, 9844.0], [73.9, 9844.0], [74.0, 9844.0], [74.1, 9844.0], [74.2, 9844.0], [74.3, 9844.0], [74.4, 9844.0], [74.5, 9844.0], [74.6, 9844.0], [74.7, 9891.0], [74.8, 9891.0], [74.9, 9891.0], [75.0, 9891.0], [75.1, 9891.0], [75.2, 9891.0], [75.3, 9891.0], [75.4, 9891.0], [75.5, 9891.0], [75.6, 9891.0], [75.7, 9891.0], [75.8, 9891.0], [75.9, 9891.0], [76.0, 10004.0], [76.1, 10004.0], [76.2, 10004.0], [76.3, 10004.0], [76.4, 10004.0], [76.5, 10004.0], [76.6, 10004.0], [76.7, 10004.0], [76.8, 10004.0], [76.9, 10004.0], [77.0, 10004.0], [77.1, 10004.0], [77.2, 10004.0], [77.3, 10004.0], [77.4, 10053.0], [77.5, 10053.0], [77.6, 10053.0], [77.7, 10053.0], [77.8, 10053.0], [77.9, 10053.0], [78.0, 10053.0], [78.1, 10053.0], [78.2, 10053.0], [78.3, 10053.0], [78.4, 10053.0], [78.5, 10053.0], [78.6, 10053.0], [78.7, 10096.0], [78.8, 10096.0], [78.9, 10096.0], [79.0, 10096.0], [79.1, 10096.0], [79.2, 10096.0], [79.3, 10096.0], [79.4, 10096.0], [79.5, 10096.0], [79.6, 10096.0], [79.7, 10096.0], [79.8, 10096.0], [79.9, 10096.0], [80.0, 10142.0], [80.1, 10142.0], [80.2, 10142.0], [80.3, 10142.0], [80.4, 10142.0], [80.5, 10142.0], [80.6, 10142.0], [80.7, 10142.0], [80.8, 10142.0], [80.9, 10142.0], [81.0, 10142.0], [81.1, 10142.0], [81.2, 10142.0], [81.3, 10142.0], [81.4, 10225.0], [81.5, 10225.0], [81.6, 10225.0], [81.7, 10225.0], [81.8, 10225.0], [81.9, 10225.0], [82.0, 10225.0], [82.1, 10225.0], [82.2, 10225.0], [82.3, 10225.0], [82.4, 10225.0], [82.5, 10225.0], [82.6, 10225.0], [82.7, 10263.0], [82.8, 10263.0], [82.9, 10263.0], [83.0, 10263.0], [83.1, 10263.0], [83.2, 10263.0], [83.3, 10263.0], [83.4, 10263.0], [83.5, 10263.0], [83.6, 10263.0], [83.7, 10263.0], [83.8, 10263.0], [83.9, 10263.0], [84.0, 10267.0], [84.1, 10267.0], [84.2, 10267.0], [84.3, 10267.0], [84.4, 10267.0], [84.5, 10267.0], [84.6, 10267.0], [84.7, 10267.0], [84.8, 10267.0], [84.9, 10267.0], [85.0, 10267.0], [85.1, 10267.0], [85.2, 10267.0], [85.3, 10267.0], [85.4, 10331.0], [85.5, 10331.0], [85.6, 10331.0], [85.7, 10331.0], [85.8, 10331.0], [85.9, 10331.0], [86.0, 10331.0], [86.1, 10331.0], [86.2, 10331.0], [86.3, 10331.0], [86.4, 10331.0], [86.5, 10331.0], [86.6, 10331.0], [86.7, 10377.0], [86.8, 10377.0], [86.9, 10377.0], [87.0, 10377.0], [87.1, 10377.0], [87.2, 10377.0], [87.3, 10377.0], [87.4, 10377.0], [87.5, 10377.0], [87.6, 10377.0], [87.7, 10377.0], [87.8, 10377.0], [87.9, 10377.0], [88.0, 10379.0], [88.1, 10379.0], [88.2, 10379.0], [88.3, 10379.0], [88.4, 10379.0], [88.5, 10379.0], [88.6, 10379.0], [88.7, 10379.0], [88.8, 10379.0], [88.9, 10379.0], [89.0, 10379.0], [89.1, 10379.0], [89.2, 10379.0], [89.3, 10379.0], [89.4, 10396.0], [89.5, 10396.0], [89.6, 10396.0], [89.7, 10396.0], [89.8, 10396.0], [89.9, 10396.0], [90.0, 10396.0], [90.1, 10396.0], [90.2, 10396.0], [90.3, 10396.0], [90.4, 10396.0], [90.5, 10396.0], [90.6, 10396.0], [90.7, 10397.0], [90.8, 10397.0], [90.9, 10397.0], [91.0, 10397.0], [91.1, 10397.0], [91.2, 10397.0], [91.3, 10397.0], [91.4, 10397.0], [91.5, 10397.0], [91.6, 10397.0], [91.7, 10397.0], [91.8, 10397.0], [91.9, 10397.0], [92.0, 10754.0], [92.1, 10754.0], [92.2, 10754.0], [92.3, 10754.0], [92.4, 10754.0], [92.5, 10754.0], [92.6, 10754.0], [92.7, 10754.0], [92.8, 10754.0], [92.9, 10754.0], [93.0, 10754.0], [93.1, 10754.0], [93.2, 10754.0], [93.3, 10754.0], [93.4, 10873.0], [93.5, 10873.0], [93.6, 10873.0], [93.7, 10873.0], [93.8, 10873.0], [93.9, 10873.0], [94.0, 10873.0], [94.1, 10873.0], [94.2, 10873.0], [94.3, 10873.0], [94.4, 10873.0], [94.5, 10873.0], [94.6, 10873.0], [94.7, 10937.0], [94.8, 10937.0], [94.9, 10937.0], [95.0, 10937.0], [95.1, 10937.0], [95.2, 10937.0], [95.3, 10937.0], [95.4, 10937.0], [95.5, 10937.0], [95.6, 10937.0], [95.7, 10937.0], [95.8, 10937.0], [95.9, 10937.0], [96.0, 11110.0], [96.1, 11110.0], [96.2, 11110.0], [96.3, 11110.0], [96.4, 11110.0], [96.5, 11110.0], [96.6, 11110.0], [96.7, 11110.0], [96.8, 11110.0], [96.9, 11110.0], [97.0, 11110.0], [97.1, 11110.0], [97.2, 11110.0], [97.3, 11110.0], [97.4, 11129.0], [97.5, 11129.0], [97.6, 11129.0], [97.7, 11129.0], [97.8, 11129.0], [97.9, 11129.0], [98.0, 11129.0], [98.1, 11129.0], [98.2, 11129.0], [98.3, 11129.0], [98.4, 11129.0], [98.5, 11129.0], [98.6, 11129.0], [98.7, 11343.0], [98.8, 11343.0], [98.9, 11343.0], [99.0, 11343.0], [99.1, 11343.0], [99.2, 11343.0], [99.3, 11343.0], [99.4, 11343.0], [99.5, 11343.0], [99.6, 11343.0], [99.7, 11343.0], [99.8, 11343.0], [99.9, 11343.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1500.0, "maxY": 5.0, "series": [{"data": [[8500.0, 4.0], [8200.0, 1.0], [8400.0, 2.0], [8700.0, 1.0], [8800.0, 1.0], [9000.0, 1.0], [9200.0, 3.0], [9600.0, 3.0], [9400.0, 3.0], [9700.0, 4.0], [10200.0, 3.0], [10100.0, 1.0], [10000.0, 3.0], [9800.0, 2.0], [10300.0, 5.0], [10700.0, 1.0], [10900.0, 1.0], [10800.0, 1.0], [11100.0, 2.0], [11300.0, 1.0], [1500.0, 1.0], [1700.0, 1.0], [2200.0, 1.0], [2400.0, 1.0], [2800.0, 2.0], [2900.0, 1.0], [3500.0, 1.0], [4500.0, 1.0], [4700.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5200.0, 1.0], [5800.0, 1.0], [5700.0, 2.0], [6100.0, 2.0], [6000.0, 2.0], [6300.0, 2.0], [6200.0, 2.0], [6500.0, 1.0], [6800.0, 1.0], [7200.0, 1.0], [7900.0, 1.0], [7700.0, 1.0], [7800.0, 1.0], [8000.0, 1.0], [8100.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 75.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 75.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 75.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.571428571428572, "minX": 1.7415495E12, "maxY": 12.058823529411764, "series": [{"data": [[1.74154956E12, 12.058823529411764], [1.7415495E12, 5.571428571428572]], "isOverall": false, "label": "challengue", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74154956E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2243.0, "minX": 1.0, "maxY": 10194.545454545454, "series": [{"data": [[2.0, 2243.0], [8.0, 5921.0], [9.0, 6031.0], [10.0, 5942.5], [11.0, 7161.5], [3.0, 2334.0], [12.0, 8555.90909090909], [13.0, 8658.166666666666], [14.0, 10194.545454545454], [15.0, 9769.0], [4.0, 3418.5], [1.0, 2817.0], [5.0, 3609.5], [6.0, 6017.0], [7.0, 4928.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.453333333333335, 7878.22666666667]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 26.483333333333334, "minX": 1.7415495E12, "maxY": 4.299262321666667E7, "series": [{"data": [[1.74154956E12, 257.26666666666665], [1.7415495E12, 26.483333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74154956E12, 4.299262321666667E7], [1.7415495E12, 4425710.116666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74154956E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 3079.0, "minX": 1.7415495E12, "maxY": 8372.264705882351, "series": [{"data": [[1.74154956E12, 8372.264705882351], [1.7415495E12, 3079.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74154956E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 3078.0000000000005, "minX": 1.7415495E12, "maxY": 8372.19117647059, "series": [{"data": [[1.74154956E12, 8372.19117647059], [1.7415495E12, 3078.0000000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74154956E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.3823529411764706, "minX": 1.7415495E12, "maxY": 7.999999999999999, "series": [{"data": [[1.74154956E12, 0.3823529411764706], [1.7415495E12, 7.999999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74154956E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1542.0, "minX": 1.7415495E12, "maxY": 11343.0, "series": [{"data": [[1.74154956E12, 11343.0], [1.7415495E12, 5055.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74154956E12, 10432.7], [1.7415495E12, 5055.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74154956E12, 11343.0], [1.7415495E12, 5055.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74154956E12, 11032.15], [1.7415495E12, 5055.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74154956E12, 2817.0], [1.7415495E12, 1542.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74154956E12, 8951.5], [1.7415495E12, 2436.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74154956E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 7526.0, "minX": 1.0, "maxY": 9844.0, "series": [{"data": [[1.0, 7968.5], [2.0, 7526.0], [4.0, 9734.5], [5.0, 9844.0], [3.0, 8895.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 7525.5, "minX": 1.0, "maxY": 9844.0, "series": [{"data": [[1.0, 7968.5], [2.0, 7525.5], [4.0, 9734.5], [5.0, 9844.0], [3.0, 8895.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.7415495E12, "maxY": 0.9666666666666667, "series": [{"data": [[1.74154956E12, 0.9666666666666667], [1.7415495E12, 0.2833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74154956E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.7415495E12, "maxY": 1.1333333333333333, "series": [{"data": [[1.74154956E12, 1.1333333333333333], [1.7415495E12, 0.11666666666666667]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74154956E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.7415495E12, "maxY": 1.1333333333333333, "series": [{"data": [[1.74154956E12, 1.1333333333333333], [1.7415495E12, 0.11666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74154956E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.7415495E12, "maxY": 1.1333333333333333, "series": [{"data": [[1.74154956E12, 1.1333333333333333], [1.7415495E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74154956E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

