@echo off
echo Adding viewport meta tags to all HTML files...

for %%f in (
    "Module1_BedrockFoundations\AgentFundamentals.html"
    "Module1_BedrockFoundations\BedrockEcosystem.html"
    "Module1_BedrockFoundations\PromptEngineering.html"
    "Module1_BedrockFoundations\ProsAndCons.html"
    "Module2_AgentArchitecture\AgentConfiguration.html"
    "Module2_AgentArchitecture\ArchitectureComponents.html"
    "Module3_ActionGroupsKnowledge\ActionGroups.html"
    "Module3_ActionGroupsKnowledge\KnowledgeBases.html"
    "Module4_AdvancedCapabilities\MultiAgentCollaboration.html"
    "Module4_AdvancedCapabilities\ProductionDeployment.html"
    "Assessment1\assessment.html"
    "Assessment2\assessment.html"
    "Assessment3\assessment.html"
    "Assessment4\assessment.html"
    "FinalAssessment\assessment.html"
) do (
    echo Processing %%f
)

echo Done!
