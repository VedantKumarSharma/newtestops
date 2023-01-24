<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteCollectionEntity>
   <description></description>
   <name>Test Suite Collection1</name>
   <tag></tag>
   <delayBetweenInstances>0</delayBetweenInstances>
   <executionMode>PARALLEL</executionMode>
   <maxConcurrentInstances>8</maxConcurrentInstances>
   <testSuiteRunConfigurations>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>true</requireConfigurationData>
            <runConfigurationData>
               <entry>
                  <key>testCloudEnvironment</key>
                  <value>{
  &quot;id&quot;: 166,
  &quot;os&quot;: &quot;linux&quot;,
  &quot;osDisplayName&quot;: &quot;Linux&quot;,
  &quot;browserName&quot;: &quot;chrome&quot;,
  &quot;browserDisplayName&quot;: &quot;Chrome&quot;,
  &quot;browserVersion&quot;: &quot;107&quot;,
  &quot;usingTunnel&quot;: false,
  &quot;timeout&quot;: 15
}</value>
               </entry>
            </runConfigurationData>
            <runConfigurationId>TestCloud</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/testsuit1</testSuiteEntity>
      </TestSuiteRunConfiguration>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>true</requireConfigurationData>
            <runConfigurationData>
               <entry>
                  <key>testCloudEnvironment</key>
                  <value>{
  &quot;id&quot;: 178,
  &quot;os&quot;: &quot;linux&quot;,
  &quot;osDisplayName&quot;: &quot;Linux&quot;,
  &quot;browserName&quot;: &quot;firefox&quot;,
  &quot;browserDisplayName&quot;: &quot;Firefox&quot;,
  &quot;browserVersion&quot;: &quot;106&quot;,
  &quot;usingTunnel&quot;: false,
  &quot;timeout&quot;: 15
}</value>
               </entry>
            </runConfigurationData>
            <runConfigurationId>TestCloud</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/testsuit2</testSuiteEntity>
      </TestSuiteRunConfiguration>
   </testSuiteRunConfigurations>
</TestSuiteCollectionEntity>
