# cyberarknode

<configuration>
  <system.webServer>

    <!-- indicates that the hello.js file is a node.js application 
    to be handled by the iisnode module -->

    <handlers>
      <add name="iisnode" path="server.js" verb="*" modules="iisnode" />
    </handlers>
    <rewrite>
      <rules>
        <rule name="VTRS">
          <match url="/*" />
          <action type="Rewrite" url="server.js" />
        </rule>
      </rules>
    </rewrite> 
    
  </system.webServer>
</configuration>

https://empakondapalli2.service-now.com/api/now/v2/table/cmdb_ci_business_capability?sysparm_fields=sys_id,name,parent,short_description,active
